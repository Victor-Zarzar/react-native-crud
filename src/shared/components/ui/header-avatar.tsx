import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/shared/components/ui/avatar";
import { Text } from "@/shared/components/ui/text";
import { useAuth } from "@/shared/hooks/useAuth";

export function HeaderAvatar() {
	const { user, signOut } = useAuth();
	const router = useRouter();

	const initials =
		user?.email?.split("@")[0]?.slice(0, 2)?.toUpperCase() ?? "??";

	async function handleSignOut() {
		await signOut();
		router.replace("/(auth)/signin");
	}

	return (
		<Pressable onPress={handleSignOut} className="mr-4">
			<Avatar alt={user?.email ?? ""}>
				<AvatarImage source={{ uri: user?.avatar_url }} />
				<AvatarFallback>
					<Text>{initials}</Text>
				</AvatarFallback>
			</Avatar>
		</Pressable>
	);
}
