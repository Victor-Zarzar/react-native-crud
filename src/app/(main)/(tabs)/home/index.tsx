import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Text } from "@/shared/components/ui/text";

export default function Home() {
	const { colors } = useTheme();
	const { t } = useTranslation();

	return (
		<View
			style={{ flex: 1, backgroundColor: colors.background }}
			className="px-6 pt-16"
		>
			<Text className="text-3xl font-semibold tracking-tight text-foreground">
				{t("tabs.home")}
			</Text>
		</View>
	);
}
