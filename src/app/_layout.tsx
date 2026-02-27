import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { NAV_THEME } from "@/shared/lib/theme";
import { DbGate } from "@/shared/providers/db-gate";
import { AuthProvider } from "@/shared/providers/auth-provider";
import "@/shared/global.css";
import "../../i18n";

export default function RootLayout() {
	const { colorScheme } = useColorScheme();
	const theme = NAV_THEME[colorScheme ?? "light"];

	return (
		<ThemeProvider value={theme}>
			<StatusBar style={theme.dark ? "light" : "dark"} />
			<DbGate>
				<AuthProvider>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name="(auth)" />
						<Stack.Screen name="(app)" />
					</Stack>
				</AuthProvider>
			</DbGate>
		</ThemeProvider>
	);
}
