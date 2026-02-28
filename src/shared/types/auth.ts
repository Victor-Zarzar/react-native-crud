export type AuthUser = {
	id: number;
	email: string;
};

export type AuthContextType = {
	user: AuthUser | null;
	isBootstrapping: boolean;
	signOut: () => Promise<void>;
};
