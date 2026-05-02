import { Calendar, Home, Library, Settings, Target } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, shadows, spacing, typography } from "@/theme";

const tabs = [
  { label: "Home", icon: Home, active: true },
  { label: "Plan", icon: Calendar },
  { label: "Library", icon: Library },
  { label: "Stats", icon: Target },
  { label: "Settings", icon: Settings },
];

export function MobileTabBar() {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <Pressable key={tab.label} style={styles.tab}>
            <View style={[styles.iconWrap, tab.active && styles.iconWrapActive]}>
              <Icon color={tab.active ? colors.dark.text : colors.dark.mutedText} size={20} />
            </View>
            <Text style={[styles.label, tab.active && styles.labelActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    alignItems: "center",
    borderRadius: radius.pill,
    height: 36,
    justifyContent: "center",
    width: 44,
  },
  iconWrapActive: {
    ...shadows.activeNav,
    backgroundColor: colors.dark.primary,
  },
  label: {
    color: colors.dark.mutedText,
    fontSize: typography.size.xs,
    fontWeight: typography.weight.medium,
  },
  labelActive: {
    color: colors.dark.text,
    fontWeight: typography.weight.bold,
  },
  tab: {
    alignItems: "center",
    flex: 1,
    gap: spacing[1],
  },
  wrap: {
    alignItems: "center",
    backgroundColor: colors.dark.cardStrong,
    borderColor: colors.dark.border,
    borderRadius: radius.xxl,
    borderWidth: 1,
    bottom: spacing[4],
    flexDirection: "row",
    gap: spacing[1],
    height: spacing.mobileTabHeight,
    left: spacing[4],
    paddingHorizontal: spacing[3],
    position: "absolute",
    right: spacing[4],
  },
});
