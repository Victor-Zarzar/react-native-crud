import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/shared/hooks/useAuth";

export default function AuthLayout() {
	const { isAuthenticated, user } = useAuth();
	if (isAuthenticated) return null;
	if (user) return <Redirect href="/(app)" />;

	return <Stack screenOptions={{ headerShown: true }} />;
}
