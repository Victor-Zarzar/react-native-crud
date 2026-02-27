import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
	const { t } = useTranslation();

	return (
		<NativeTabs>
			<NativeTabs.Trigger name="index">
				<Label>{t("tabs.home")}</Label>
				<Icon sf="house.fill" drawable="custom_android_drawable" />
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name="about">
				<Icon sf="info.circle.fill" drawable="custom_about_drawable" />
				<Label>{t("tabs.about")}</Label>
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name="settings">
				<Icon sf="gear" drawable="custom_settings_drawable" />
				<Label>{t("tabs.settings")}</Label>
			</NativeTabs.Trigger>
		</NativeTabs>
	);
}
