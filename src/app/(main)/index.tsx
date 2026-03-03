import { Redirect } from "expo-router";
import { useAuth } from "@/shared/hooks/useAuth";

export default function Index() {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) return null;

	return (
		<Redirect
			href={isAuthenticated ? "/(main)/(tabs)/home" : "/(auth)/signin"}
		/>
	);
}
