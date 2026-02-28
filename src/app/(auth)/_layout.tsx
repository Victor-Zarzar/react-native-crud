import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/shared/hooks/useAuth";

export default function AuthLayout() {
	const { isAuthReady, user } = useAuth();
	if (isAuthReady) return null;
	if (user) return <Redirect href="/(app)" />;

	return <Stack screenOptions={{ headerShown: true }} />;
}
