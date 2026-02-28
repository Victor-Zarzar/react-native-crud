import { eq } from "drizzle-orm";
import * as Crypto from "expo-crypto";
import { db } from "@/shared/db/client";
import { sessions, users } from "@/shared/db/schema";
import type { AuthUser } from "@/shared/types/auth";

async function hashPassword(password: string): Promise<string> {
	return Crypto.digestStringAsync(
		Crypto.CryptoDigestAlgorithm.SHA256,
		password,
	);
}

export async function getSessionUser(): Promise<AuthUser | null> {
	const [session] = await db.select().from(sessions).limit(1);
	if (!session) return null;

	const [user] = await db
		.select()
		.from(users)
		.where(eq(users.id, Number(session.userId)))
		.limit(1);

	if (!user) return null;
	return { id: user.id, email: user.email };
}

export async function signUpUser(
	email: string,
	password: string,
): Promise<AuthUser> {
	const existing = await db
		.select()
		.from(users)
		.where(eq(users.email, email))
		.limit(1);

	if (existing.length) {
		throw new Error("Email already in use");
	}

	const passwordHash = await hashPassword(password);
	const now = Date.now();

	const [user] = await db
		.insert(users)
		.values({ email, passwordHash, createdAt: now })
		.returning();

	await db.insert(sessions).values({
		userId: String(user.id),
		createdAt: now,
	});

	return { id: user.id, email: user.email };
}

export async function signInUser(
	email: string,
	password: string,
): Promise<AuthUser> {
	const [user] = await db
		.select()
		.from(users)
		.where(eq(users.email, email))
		.limit(1);

	if (!user) throw new Error("Invalid credentials");

	const passwordHash = await hashPassword(password);
	if (passwordHash !== user.passwordHash) {
		throw new Error("Invalid credentials");
	}

	await db.delete(sessions).where(eq(sessions.userId, String(user.id)));
	await db.insert(sessions).values({
		userId: String(user.id),
		createdAt: Date.now(),
	});

	return { id: user.id, email: user.email };
}

export async function signOutUser(userId: number): Promise<void> {
	await db.delete(sessions).where(eq(sessions.userId, String(userId)));
}
