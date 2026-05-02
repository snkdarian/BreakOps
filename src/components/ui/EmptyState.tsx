import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "@/theme";
import { SecondaryButton } from "./SecondaryButton";

type EmptyStateProps = {
  title: string;
  message: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ actionLabel, icon, message, onAction, title }: EmptyStateProps) {
  return (
    <View style={styles.wrap}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {actionLabel ? <SecondaryButton label={actionLabel} onPress={onAction} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    color: colors.dark.mutedText,
    fontSize: typography.size.md,
    lineHeight: typography.lineHeight.md,
    maxWidth: 360,
    textAlign: "center",
  },
  title: {
    color: colors.dark.text,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
  },
  wrap: {
    alignItems: "center",
    gap: spacing[3],
    justifyContent: "center",
    padding: spacing[8],
  },
});
