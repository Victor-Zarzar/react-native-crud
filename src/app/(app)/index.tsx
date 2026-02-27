import { Redirect } from "expo-router";
import { useAuth } from "@/shared/providers/auth-provider";

export default function Index() {
	const { user, isBootstrapping } = useAuth();

	if (isBootstrapping) return null;

	return <Redirect href={user ? "/(app)" : "/(auth)/signin"} />;
}
