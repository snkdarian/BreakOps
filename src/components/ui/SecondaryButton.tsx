import type { ReactNode } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from "react-native";
import { colors, radius, spacing, typography } from "@/theme";

type SecondaryButtonProps = {
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function SecondaryButton({ disabled, icon, label, loading, onPress, style }: SecondaryButtonProps) {
  return (
    <Pressable disabled={disabled || loading} onPress={onPress} style={({ pressed }) => [styles.button, style, disabled && styles.disabled, pressed && styles.pressed]}>
      {loading ? <ActivityIndicator color={colors.dark.accent} /> : icon}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.dark.cardMuted,
    borderColor: colors.dark.border,
    borderRadius: radius.button,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing[2],
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: spacing[5],
  },
  disabled: {
    opacity: 0.52,
  },
  label: {
    color: colors.dark.text,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semibold,
  },
  pressed: {
    opacity: 0.82,
  },
});
