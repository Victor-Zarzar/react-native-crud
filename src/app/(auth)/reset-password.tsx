import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { ResetPasswordForm } from "@/shared/components/reset-password-form";

export default function ResetPassword() {
	const { t } = useTranslation();

	return (
		<View>
			<ResetPasswordForm />
		</View>
	);
}
