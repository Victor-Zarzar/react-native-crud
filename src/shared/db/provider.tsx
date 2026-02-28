import { SQLiteProvider } from "expo-sqlite";
import type React from "react";
import { MigrationGate } from "./db-migration";

export function DbProvider({ children }: { children: React.ReactNode }) {
	return (
		<SQLiteProvider databaseName="app.db" useSuspense>
			<MigrationGate>{children}</MigrationGate>
		</SQLiteProvider>
	);
}
