import { z } from "zod";

export type AuthContextType = {
	user: AuthUser | null;
	isAuthReady: boolean;
	signIn: (email: string, password: string) => Promise<void>;
	signUp: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
};

export type AuthUser = {
	id: number;
	email: string;
};

export const signInSchema = z.object({
	email: z.email("Invalid email"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z.object({
	email: z.email("Invalid email"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;
