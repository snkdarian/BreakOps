import { StyleSheet, Text, View } from "react-native";
import { colors, palette, radius, spacing, typography } from "@/theme";
import type { Accent } from "@/types";

type StatusBadgeProps = {
  label: string;
  accent?: Accent;
};

const accentColor = {
  blue: colors.dark.primary,
  cyan: colors.dark.accent,
  violet: colors.dark.secondary,
  purple: colors.dark.purple,
  mint: colors.dark.success,
  amber: colors.dark.warning,
  danger: colors.dark.danger,
};

export function StatusBadge({ accent = "cyan", label }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, { borderColor: accentColor[accent], backgroundColor: `${accentColor[accent]}22` }]}>
      <Text style={[styles.label, { color: accentColor[accent] }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: radius.pill,
    borderWidth: 1,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
  },
  label: {
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semibold,
    lineHeight: typography.lineHeight.xs,
  },
});
