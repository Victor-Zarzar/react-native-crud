import { db } from "@/shared/db/client";
import { sessions, users } from "@/shared/db/schema";
import { eq } from "drizzle-orm";
import type { AuthUser } from "@/shared/types/auth";

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

export async function clearSession(userId: number): Promise<void> {
  await db.delete(sessions).where(eq(sessions.userId, String(userId)));
}
