import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";
import { getSessionUser, clearSession } from "./service";
import type { AuthUser } from "@/shared/types/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [isBootstrapping, setIsBootstrapping] = useState(true);

	useEffect(() => {
		getSessionUser()
			.then(setUser)
			.finally(() => setIsBootstrapping(false));
	}, []);

	async function signOut() {
		await clearSession();
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ user, isBootstrapping, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}
