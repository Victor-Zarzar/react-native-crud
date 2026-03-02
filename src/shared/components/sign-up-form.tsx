import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, type TextInput, View } from "react-native";
import { type SignUpSchema, signUpSchema } from "@/shared/auth/schemas";
import { SocialConnections } from "@/shared/components/social-connections";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Separator } from "@/shared/components/ui/separator";
import { Text } from "@/shared/components/ui/text";
import { useAuth } from "../hooks/useAuth";

export function SignUpForm() {
	const router = useRouter();
	const { signUp } = useAuth();
	const passwordInputRef = React.useRef<TextInput>(null);

	const {
		control,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: { email: "", password: "" },
	});

	async function onSubmit({ email, password }: SignUpSchema) {
		try {
			await signUp(email, password);
			router.replace("/(app)");
		} catch (err) {
			setError("root", {
				message: err instanceof Error ? err.message : "Something went wrong",
			});
		}
	}

	return (
		<View className="gap-6">
			<Card className="border-border/0 sm:border-border shadow-none sm:shadow-sm sm:shadow-black/5">
				<CardHeader>
					<CardTitle className="text-center text-xl sm:text-left">
						Create your account
					</CardTitle>
					<CardDescription className="text-center sm:text-left">
						Welcome! Please fill in the details to get started.
					</CardDescription>
				</CardHeader>
				<CardContent className="gap-6">
					<View className="gap-6">
						<View className="gap-1.5">
							<Label htmlFor="email">Email</Label>
							<Controller
								control={control}
								name="email"
								render={({ field: { onChange, value } }) => (
									<Input
										id="email"
										placeholder="m@example.com"
										keyboardType="email-address"
										autoComplete="email"
										autoCapitalize="none"
										returnKeyType="next"
										submitBehavior="submit"
										onSubmitEditing={() => passwordInputRef.current?.focus()}
										onChangeText={onChange}
										value={value}
									/>
								)}
							/>
							{errors.email && (
								<Text className="text-destructive text-sm">
									{errors.email.message}
								</Text>
							)}
						</View>

						<View className="gap-1.5">
							<Label htmlFor="password">Password</Label>
							<Controller
								control={control}
								name="password"
								render={({ field: { onChange, value } }) => (
									<Input
										ref={passwordInputRef}
										id="password"
										secureTextEntry
										returnKeyType="send"
										onSubmitEditing={handleSubmit(onSubmit)}
										onChangeText={onChange}
										value={value}
									/>
								)}
							/>
							{errors.password && (
								<Text className="text-destructive text-sm">
									{errors.password.message}
								</Text>
							)}
						</View>

						{errors.root && (
							<Text className="text-destructive text-center text-sm">
								{errors.root.message}
							</Text>
						)}

						<Button
							className="w-full"
							onPress={handleSubmit(onSubmit)}
							disabled={isSubmitting}
						>
							<Text>{isSubmitting ? "Creating account..." : "Continue"}</Text>
						</Button>
					</View>

					<Text className="text-center text-sm">
						Already have an account?{" "}
						<Pressable onPress={() => router.push("/(auth)/signin")}>
							<Text className="text-sm underline underline-offset-4">
								Sign in
							</Text>
						</Pressable>
					</Text>

					<View className="flex-row items-center">
						<Separator className="flex-1" />
						<Text className="text-muted-foreground px-4 text-sm">or</Text>
						<Separator className="flex-1" />
					</View>
					<SocialConnections />
				</CardContent>
			</Card>
		</View>
	);
}
