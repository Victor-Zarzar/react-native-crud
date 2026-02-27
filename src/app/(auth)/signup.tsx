import { Text } from "@/shared/components/ui/text";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const { t } = useTranslation();

  return (
    <View>
      <Text className="">{t('')}</Text>
    </View>
  );
}
