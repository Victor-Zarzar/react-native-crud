import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/shared/db/client";
import { sessions, users } from "@/shared/db/schema";
import { eq } from "drizzle-orm";

type AuthContextType = {
	user: { id: string; email: string } | null;
	isBootstrapping: boolean;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<AuthContextType["user"]>(null);
	const [isBootstrapping, setIsBootstrapping] = useState(true);

	useEffect(() => {
		bootstrap();
	}, []);

	async function bootstrap() {
		try {
			const session = await db.select().from(sessions).limit(1);

			if (session.length) {
				const foundUser = await db
					.select()
					.from(users)
					.where(eq(users.id, session[0].userId))
					.limit(1);

				if (foundUser.length) {
					setUser({
						id: foundUser[0].id,
						email: foundUser[0].email,
					});
				}
			}
		} finally {
			setIsBootstrapping(false);
		}
	}

	async function signOut() {
		await db.delete(sessions);
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ user, isBootstrapping, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
