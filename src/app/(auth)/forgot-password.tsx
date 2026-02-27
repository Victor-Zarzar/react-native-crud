import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { ForgotPasswordForm } from "@/shared/components/forgot-password-form";

export default function ForgotPassword() {
	const { t } = useTranslation();

	return (
		<View>
			<ForgotPasswordForm />
		</View>
	);
}
