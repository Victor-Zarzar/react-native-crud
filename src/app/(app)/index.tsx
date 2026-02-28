import { useAuth } from "@/shared/hooks/useAuth";
import { Redirect } from "expo-router";

export default function Index() {
	const { user, isBootstrapping } = useAuth();

	if (isBootstrapping) return null;

	return <Redirect href={user ? "/(app)" : "/(auth)/signin"} />;
}
