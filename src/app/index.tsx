import { Activity, Brain, CalendarDays, Eye, Footprints, Moon, Play, Sparkles, Target, Zap } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { AppShell, ResponsiveContainer } from "@/components/layout";
import {
  AppCard,
  GradientButton,
  GradientCard,
  InsightCard,
  MiniLineChart,
  ProgressBar,
  RecoveryScoreRing,
  StatCard,
  StatusBadge,
  UpcomingBreakCard,
} from "@/components/ui";
import { colors, radius, spacing, typography } from "@/theme";
import { useResponsive } from "@/hooks/useResponsive";

export default function HomeScreen() {
  const { isDesktop } = useResponsive();

  return (
    <AppShell>
      <ResponsiveContainer>
        <View style={[styles.hero, !isDesktop && styles.mobileHero]}>
          <View style={styles.heroCopy}>
            <Text style={styles.greeting}>Good morning, Alex</Text>
            <Text style={styles.heroTitle}>
              Smart breaks.{"\n"}
              <Text style={styles.heroAccent}>Better you.</Text>
            </Text>
            <Text style={styles.heroBody}>Plan breaks. Protect energy. Perform better every day.</Text>
            <View style={styles.heroActions}>
              <GradientButton icon={<Zap color={colors.dark.text} size={18} />} label="Start a Break" />
              <StatusBadge accent="violet" label="Meeting Heavy Day" />
            </View>
          </View>
          <View style={styles.heroScore}>
            <RecoveryScoreRing score={82} size={isDesktop ? 190 : 156} />
            <View style={styles.scoreMeta}>
              <Zap color={colors.dark.accent} size={26} />
              <Text style={styles.scoreMetaText}>+12 pts vs yesterday</Text>
            </View>
          </View>
          {isDesktop ? (
            <View style={styles.heroChart}>
              <MiniLineChart height={140} />
            </View>
          ) : null}
        </View>

        <View style={[styles.dashboardGrid, !isDesktop && styles.mobileStack]}>
          <View style={styles.mainColumn}>
            <View style={[styles.statsGrid, !isDesktop && styles.mobileStack]}>
              <StatCard accent="cyan" icon={<Activity color={colors.dark.accent} size={24} />} label="Avg. Recovery Score" value="78" delta="+8 pts vs last week" showChart />
              <StatCard accent="violet" icon={<CalendarDays color={colors.dark.secondary} size={24} />} label="Total Breaks" value="18" delta="+3 vs last week" />
              <StatCard accent="mint" icon={<Target color={colors.dark.success} size={24} />} label="Focus Time" value="4h 12m" delta="+8%" showChart />
            </View>

            <GradientCard>
              <View style={styles.sectionHeader}>
                <View>
                  <Text style={styles.sectionTitle}>Today Plan</Text>
                  <Text style={styles.sectionMeta}>Preview structure for Step 1 components</Text>
                </View>
                <StatusBadge label="4 breaks left" />
              </View>
              <View style={styles.planList}>
                <InsightCard icon={<Eye color={colors.dark.accent} size={28} />} title="10:30 AM" value="Eye Reset" description="Reduce eye strain and refresh your focus." />
                <InsightCard icon={<Footprints color={colors.dark.success} size={28} />} title="12:30 PM" value="Walk Break" description="Step away, move, and clear your head." />
                <InsightCard icon={<Brain color={colors.dark.primary} size={28} />} title="3:30 PM" value="Breathing Reset" description="Calm your mind and reset your rhythm." />
                <InsightCard icon={<Moon color={colors.dark.secondary} size={28} />} title="5:30 PM" value="Shutdown Ritual" description="End your day with clarity and peace." />
              </View>
            </GradientCard>

            <View style={[styles.chartGrid, !isDesktop && styles.mobileStack]}>
              <AppCard style={styles.chartCard}>
                <Text style={styles.sectionTitle}>Focus Time Trend</Text>
                <MiniLineChart height={150} />
              </AppCard>
              <AppCard style={styles.chartCard}>
                <Text style={styles.sectionTitle}>Break Consistency</Text>
                <RecoveryScoreRing score={87} size={132} />
                <ProgressBar value={87} />
              </AppCard>
            </View>
          </View>

          <View style={styles.sideColumn}>
            <AppCard>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Upcoming Breaks</Text>
                <Text style={styles.linkText}>See all</Text>
              </View>
              <View style={[styles.upcomingGrid, !isDesktop && styles.mobileStack]}>
                <UpcomingBreakCard icon={<Eye color={colors.dark.accent} size={34} />} time="10:30 AM" title="Eye Reset" duration="5 min" />
                <UpcomingBreakCard icon={<Footprints color={colors.dark.success} size={34} />} time="12:30 PM" title="Walk Break" duration="10 min" />
                <UpcomingBreakCard icon={<Brain color={colors.dark.primary} size={34} />} time="3:30 PM" title="Breathing Reset" duration="5 min" category="Breathing" />
                <UpcomingBreakCard icon={<Moon color={colors.dark.secondary} size={34} />} time="5:00 PM" title="Shutdown Ritual" duration="10 min" category="Mental" />
              </View>
            </AppCard>
            <AppCard>
              <Text style={styles.sectionTitle}>Focus Areas</Text>
              <InsightCard icon={<Sparkles color={colors.dark.secondary} size={22} />} title="Focus" value="80%" />
              <ProgressBar value={80} />
              <InsightCard icon={<Activity color={colors.dark.success} size={22} />} title="Posture" value="65%" />
              <ProgressBar value={65} />
              <InsightCard icon={<Zap color={colors.dark.warning} size={22} />} title="Energy" value="72%" />
              <ProgressBar value={72} />
            </AppCard>
            <GradientButton icon={<Play color={colors.dark.text} size={18} />} label="Start Next Break" />
          </View>
        </View>
      </ResponsiveContainer>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  chartCard: {
    flex: 1,
    gap: spacing[4],
    minHeight: 250,
  },
  chartGrid: {
    flexDirection: "row",
    gap: spacing[4],
  },
  dashboardGrid: {
    flexDirection: "row",
    gap: spacing[5],
  },
  greeting: {
    color: colors.dark.mutedText,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
  },
  hero: {
    alignItems: "center",
    backgroundColor: colors.dark.cardStrong,
    borderColor: colors.dark.border,
    borderRadius: radius.cardLarge,
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing[8],
    marginBottom: spacing[5],
    overflow: "hidden",
    padding: spacing[8],
  },
  heroAccent: {
    color: colors.dark.secondary,
  },
  heroActions: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing[3],
    marginTop: spacing[5],
  },
  heroBody: {
    color: colors.dark.mutedText,
    fontSize: typography.size.lg,
    lineHeight: typography.lineHeight.lg,
  },
  heroCopy: {
    flexBasis: 360,
    flexGrow: 1,
    flexShrink: 0,
    gap: spacing[2],
    minWidth: 360,
  },
  heroScore: {
    alignItems: "center",
    flexShrink: 0,
    gap: spacing[3],
    width: 220,
  },
  heroChart: {
    flexBasis: 260,
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: 420,
    minWidth: 260,
  },
  heroTitle: {
    color: colors.dark.text,
    fontSize: typography.size.hero,
    fontWeight: typography.weight.black,
    lineHeight: typography.lineHeight.hero,
  },
  linkText: {
    color: colors.dark.accent,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
  },
  mainColumn: {
    flex: 1.8,
    gap: spacing[5],
    minWidth: 0,
  },
  mobileStack: {
    flexDirection: "column",
  },
  mobileHero: {
    alignItems: "flex-start",
    flexDirection: "column",
    padding: spacing[5],
  },
  planList: {
    gap: spacing[3],
  },
  scoreMeta: {
    alignItems: "center",
    gap: spacing[1],
  },
  scoreMetaText: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
    textAlign: "center",
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing[4],
  },
  sectionMeta: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
    marginTop: spacing[1],
  },
  sectionTitle: {
    color: colors.dark.text,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
  },
  sideColumn: {
    flex: 1,
    gap: spacing[5],
    minWidth: 0,
  },
  statsGrid: {
    flexDirection: "row",
    gap: spacing[4],
  },
  upcomingGrid: {
    flexDirection: "row",
    gap: spacing[3],
  },
});
