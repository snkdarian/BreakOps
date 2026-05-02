import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "@/theme";

type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = "Loading BreakOps..." }: LoadingStateProps) {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator color={colors.dark.accent} size="large" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.dark.mutedText,
    fontSize: typography.size.md,
  },
  wrap: {
    alignItems: "center",
    gap: spacing[3],
    justifyContent: "center",
    padding: spacing[8],
  },
});
