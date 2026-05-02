import type { PropsWithChildren } from "react";
import { StyleSheet, type StyleProp, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients, radius, shadows, spacing } from "@/theme";

type GradientCardProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function GradientCard({ children, style }: GradientCardProps) {
  return (
    <LinearGradient colors={gradients.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.card, style]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    ...shadows.card,
    borderColor: colors.dark.border,
    borderRadius: radius.cardLarge,
    borderWidth: 1,
    padding: spacing[6],
  },
});
