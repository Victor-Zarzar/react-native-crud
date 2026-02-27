import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/shared/providers/auth-provider";

export default function AuthLayout() {
	const { isBootstrapping, user } = useAuth();
	if (isBootstrapping) return null;
	if (user) return <Redirect href="/(app)" />;

	return <Stack screenOptions={{ headerShown: true }} />;
}
