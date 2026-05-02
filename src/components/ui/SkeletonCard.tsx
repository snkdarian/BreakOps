import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { colors, radius, spacing } from "@/theme";

type SkeletonCardProps = {
  style?: StyleProp<ViewStyle>;
};

export function SkeletonCard({ style }: SkeletonCardProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={[styles.line, styles.short]} />
      <View style={[styles.line, styles.long]} />
      <View style={styles.block} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.dark.cardMuted,
    borderRadius: radius.md,
    height: 92,
    opacity: 0.62,
  },
  card: {
    backgroundColor: colors.dark.card,
    borderColor: colors.dark.border,
    borderRadius: radius.card,
    borderWidth: 1,
    gap: spacing[3],
    padding: spacing[5],
  },
  line: {
    backgroundColor: colors.dark.cardMuted,
    borderRadius: radius.pill,
    height: 12,
    opacity: 0.72,
  },
  long: {
    width: "74%",
  },
  short: {
    width: "42%",
  },
});
