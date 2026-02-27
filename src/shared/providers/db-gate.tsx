import React from "react";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../../drizzle/migrations";
import { db } from "@/shared/db/client";
import { View, Text } from "react-native";

export function DbGate({ children }: { children: React.ReactNode }) {
	const { success, error } = useMigrations(db, migrations);

	if (error) {
		return (
			<View>
				<Text>Migration error: {error.message}</Text>
			</View>
		);
	}

	if (!success) {
		return (
			<View>
				<Text>Running migrations...</Text>
			</View>
		);
	}

	return <>{children}</>;
}
