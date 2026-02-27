import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { SignUpForm } from "@/shared/components/sign-up-form";

export default function SignUp() {
	const { t } = useTranslation();

	return (
		<View>
			<SignUpForm />
		</View>
	);
}
