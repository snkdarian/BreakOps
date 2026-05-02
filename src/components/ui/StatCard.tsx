import type { ReactNode } from "react";
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from "react-native";
import { colors, spacing, typography } from "@/theme";
import type { Accent } from "@/types";
import { GlowCard } from "./GlowCard";
import { MiniLineChart } from "./MiniLineChart";

type StatCardProps = {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
  accent?: Accent;
  showChart?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function StatCard({ accent = "blue", delta, icon, label, showChart, style, value }: StatCardProps) {
  return (
    <GlowCard accent={accent} style={[styles.card, style]}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        {icon}
      </View>
      <Text style={styles.value}>{value}</Text>
      {delta ? <Text style={styles.delta}>{delta}</Text> : null}
      {showChart ? <MiniLineChart height={42} /> : null}
    </GlowCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing[2],
    minHeight: 128,
  },
  delta: {
    color: colors.dark.success,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  value: {
    color: colors.dark.text,
    fontSize: typography.size.title,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeight.title,
  },
});
