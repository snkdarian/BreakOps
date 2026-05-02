import { Brain, Eye, Flame, Moon, ShieldCheck, TrendingUp, Zap } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing, typography } from "@/theme";
import { AppCard, InsightCard, ProgressBar } from "@/components/ui";

export function WebRightPanel() {
  return (
    <View style={styles.panel}>
      <AppCard>
        <Text style={styles.sectionTitle}>Next Break</Text>
        <InsightCard icon={<Eye color={colors.dark.accent} size={28} />} title="Eye Reset" value="In 1h 25m" description="Reduce eye strain and refresh focus." />
      </AppCard>
      <AppCard>
        <Text style={styles.sectionTitle}>Break Streak</Text>
        <View style={styles.row}>
          <Flame color={colors.dark.warning} size={30} />
          <Text style={styles.big}>12 days</Text>
        </View>
        <ProgressBar value={86} />
      </AppCard>
      <AppCard>
        <Text style={styles.sectionTitle}>Focus Areas</Text>
        <InsightCard icon={<Zap color={colors.dark.secondary} size={24} />} title="Focus" value="80%" />
        <InsightCard icon={<ShieldCheck color={colors.dark.success} size={24} />} title="Posture" value="65%" />
        <InsightCard icon={<Brain color={colors.dark.primary} size={24} />} title="Stress Relief" value="72%" />
        <InsightCard icon={<Moon color={colors.dark.warning} size={24} />} title="Sleep" value="50%" />
      </AppCard>
      <AppCard>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Weekly Progress</Text>
          <TrendingUp color={colors.dark.accent} size={22} />
        </View>
        <ProgressBar value={75} />
        <Text style={styles.meta}>18 planned breaks, 14 completed</Text>
      </AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  big: {
    color: colors.dark.text,
    fontSize: typography.size.title,
    fontWeight: typography.weight.black,
  },
  meta: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
  },
  panel: {
    borderLeftColor: colors.dark.border,
    borderLeftWidth: 1,
    gap: spacing[4],
    padding: spacing[5],
    width: spacing.rightPanelWidth,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing[3],
    marginVertical: spacing[4],
  },
  rowBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing[4],
  },
  sectionTitle: {
    color: colors.dark.text,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    marginBottom: spacing[3],
  },
});
