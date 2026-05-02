import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.dark.background} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.dark.background } }} />
    </>
  );
}
