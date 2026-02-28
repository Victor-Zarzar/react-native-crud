import type React from "react";
import { useEffect, useState } from "react";
import type { AuthUser } from "@/shared/types/auth";
import {
	getSessionUser,
	signInUser,
	signOutUser,
	signUpUser,
} from "../services/userService";
import { AuthContext } from "./context";

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [isAuthReady, setIsAuthReady] = useState(false);

	useEffect(() => {
		getSessionUser()
			.then(setUser)
			.finally(() => setIsAuthReady(false));
	}, []);

	async function signIn(email: string, password: string): Promise<void> {
		const user = await signInUser(email, password);
		setUser(user);
	}

	async function signUp(email: string, password: string): Promise<void> {
		const user = await signUpUser(email, password);
		setUser(user);
	}

	async function signOut(): Promise<void> {
		if (!user) return;
		await signOutUser(user.id);
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{ user, isAuthReady, signIn, signUp, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
}
