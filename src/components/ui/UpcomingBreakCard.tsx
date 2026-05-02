import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "@/theme";
import { StatusBadge } from "./StatusBadge";

type UpcomingBreakCardProps = {
  time: string;
  title: string;
  duration: string;
  icon?: ReactNode;
  category?: string;
};

export function UpcomingBreakCard({ category = "Physical", duration, icon, time, title }: UpcomingBreakCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.iconWrap}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      <StatusBadge label={category} />
      <Text style={styles.duration}>{duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: colors.dark.cardStrong,
    borderColor: colors.dark.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    flex: 1,
    gap: spacing[3],
    minHeight: 178,
    padding: spacing[4],
  },
  duration: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
  },
  iconWrap: {
    alignItems: "center",
    height: 46,
    justifyContent: "center",
  },
  time: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
  },
  title: {
    color: colors.dark.text,
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeight.md,
    textAlign: "center",
  },
});
