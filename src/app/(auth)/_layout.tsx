import { useAuth } from "@/shared/hooks/useAuth";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
	const { isBootstrapping, user } = useAuth();
	if (isBootstrapping) return null;
	if (user) return <Redirect href="/(app)" />;

	return <Stack screenOptions={{ headerShown: true }} />;
}
