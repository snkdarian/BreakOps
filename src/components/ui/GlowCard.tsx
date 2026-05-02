import type { PropsWithChildren } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { colors, radius, shadows, spacing } from "@/theme";
import type { Accent } from "@/types";

type GlowCardProps = PropsWithChildren<{
  accent?: Accent;
  style?: StyleProp<ViewStyle>;
}>;

const glowByAccent = {
  blue: shadows.card,
  cyan: shadows.glowCyan,
  violet: shadows.glowViolet,
  purple: shadows.glowViolet,
  mint: shadows.glowCyan,
  amber: shadows.card,
  danger: shadows.card,
};

export function GlowCard({ accent = "blue", children, style }: GlowCardProps) {
  return <View style={[styles.card, glowByAccent[accent], style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.dark.cardStrong,
    borderColor: colors.dark.borderStrong,
    borderRadius: radius.cardLarge,
    borderWidth: 1,
    padding: spacing[5],
  },
});
