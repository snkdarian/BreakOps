import type { PropsWithChildren, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, gradients } from "@/theme";
import { useResponsive } from "@/hooks/useResponsive";
import { MobileTabBar } from "./MobileTabBar";
import { WebRightPanel } from "./WebRightPanel";
import { WebSidebar } from "./WebSidebar";
import { WebTopBar } from "./WebTopBar";

type AppShellProps = PropsWithChildren<{
  rightPanel?: ReactNode;
}>;

export function AppShell({ children, rightPanel }: AppShellProps) {
  const { isDesktop } = useResponsive();

  if (isDesktop) {
    return (
      <LinearGradient colors={gradients.appBackground} style={styles.root}>
        <View style={styles.desktopFrame}>
          <WebSidebar />
          <View style={styles.desktopMain}>
            <WebTopBar />
            <ScrollView contentContainerStyle={styles.scrollContent}>{children}</ScrollView>
          </View>
          {rightPanel ?? <WebRightPanel />}
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={gradients.appBackground} style={styles.root}>
      <SafeAreaView style={styles.mobileFrame}>
        <ScrollView contentContainerStyle={styles.mobileContent}>{children}</ScrollView>
        <MobileTabBar />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  desktopFrame: {
    backgroundColor: colors.dark.background,
    flex: 1,
    flexDirection: "row",
  },
  desktopMain: {
    flex: 1,
    minWidth: 0,
  },
  mobileContent: {
    flexGrow: 1,
  },
  mobileFrame: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
