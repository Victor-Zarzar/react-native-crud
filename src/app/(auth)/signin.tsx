import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { SignInForm } from "@/shared/components/sign-in-form";

export default function SignIn() {
	const { t } = useTranslation();

	return (
		<View>
			<SignInForm />
		</View>
	);
}
