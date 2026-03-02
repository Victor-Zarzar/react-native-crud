import { Redirect } from "expo-router";
import { useAuth } from "@/shared/hooks/useAuth";

export default function Index() {
	const { user, isAuthenticated } = useAuth();

	if (isAuthenticated) return null;

	return <Redirect href={user ? "/(app)" : "/(auth)/signin"} />;
}
