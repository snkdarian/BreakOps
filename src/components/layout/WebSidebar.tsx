import { Calendar, CircleHelp, Home, Library, LogOut, Settings, Target, User, Zap } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients, radius, shadows, spacing, typography } from "@/theme";
import { LogoMark } from "./LogoMark";
import { RecoveryScoreRing } from "@/components/ui";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Dashboard", icon: Calendar },
  { label: "Break Library", icon: Library },
  { label: "Insights", icon: Target },
  { label: "Recover Recharge", icon: Zap },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
  { label: "Help & Support", icon: CircleHelp },
  { label: "Log Out", icon: LogOut },
];

export function WebSidebar() {
  return (
    <View style={styles.sidebar}>
      <LogoMark />
      <View style={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Pressable key={item.label} style={[styles.navItem, item.active && styles.navItemActive]}>
              <Icon color={item.active ? colors.dark.accent : colors.nav.inactive} size={20} strokeWidth={2} />
              <Text style={[styles.navText, item.active && styles.navTextActive]}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
      <LinearGradient colors={gradients.buttonSecondary} style={styles.scoreCard}>
        <Text style={styles.scoreTitle}>Recovery Score</Text>
        <RecoveryScoreRing score={82} size={112} />
        <Text style={styles.scoreMeta}>+12 pts vs yesterday</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    gap: spacing[2],
    marginTop: spacing[8],
  },
  navItem: {
    alignItems: "center",
    borderColor: "transparent",
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing[3],
    minHeight: 48,
    paddingHorizontal: spacing[4],
  },
  navItemActive: {
    ...shadows.activeNav,
    backgroundColor: colors.nav.active,
    borderColor: colors.nav.activeBorder,
  },
  navText: {
    color: colors.nav.inactive,
    fontSize: typography.size.md,
    fontWeight: typography.weight.medium,
  },
  navTextActive: {
    color: colors.dark.accent,
    fontWeight: typography.weight.bold,
  },
  scoreCard: {
    borderColor: colors.dark.border,
    borderRadius: radius.card,
    borderWidth: 1,
    gap: spacing[3],
    marginTop: "auto",
    padding: spacing[4],
  },
  scoreMeta: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
    textAlign: "center",
  },
  scoreTitle: {
    color: colors.dark.text,
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
  },
  sidebar: {
    backgroundColor: colors.dark.surface,
    borderColor: colors.dark.border,
    borderRightWidth: 1,
    gap: spacing[4],
    minHeight: "100%",
    padding: spacing[6],
    width: spacing.sidebarWidth,
  },
});
