import type { ReactNode } from "react";
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from "react-native";
import { colors, spacing, typography } from "@/theme";
import { AppCard } from "./AppCard";

type InsightCardProps = {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function InsightCard({ description, icon, style, title, value }: InsightCardProps) {
  return (
    <AppCard style={[styles.card, style]}>
      <View style={styles.row}>
        {icon}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
          {description ? <Text style={styles.description}>{description}</Text> : null}
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing[4],
  },
  content: {
    flex: 1,
    gap: spacing[1],
  },
  description: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing[3],
  },
  title: {
    color: colors.dark.subtleText,
    fontSize: typography.size.sm,
  },
  value: {
    color: colors.dark.text,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
  },
});
