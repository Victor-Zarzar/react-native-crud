import { Redirect } from "expo-router";
import { useAuth } from "@/shared/hooks/useAuth";

export default function Index() {
	const { user, isAuthReady } = useAuth();

	if (isAuthReady) return null;

	return <Redirect href={user ? "/(app)" : "/(auth)/signin"} />;
}
