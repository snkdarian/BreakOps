import type { ReactNode } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients, radius, shadows, spacing, typography } from "@/theme";

type GradientButtonProps = {
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function GradientButton({ disabled, icon, label, loading, onPress, style }: GradientButtonProps) {
  return (
    <Pressable disabled={disabled || loading} onPress={onPress} style={({ pressed }) => [style, pressed && styles.pressed]}>
      <LinearGradient
        colors={disabled ? gradients.buttonSecondary : gradients.buttonPrimary}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[styles.button, disabled && styles.disabled]}
      >
        {loading ? <ActivityIndicator color={colors.dark.text} /> : icon}
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    ...shadows.button,
    alignItems: "center",
    borderRadius: radius.button,
    flexDirection: "row",
    gap: spacing[2],
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: spacing[5],
  },
  disabled: {
    opacity: 0.58,
  },
  label: {
    color: colors.dark.text,
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeight.md,
  },
  pressed: {
    opacity: 0.86,
    transform: [{ scale: 0.99 }],
  },
});
