import { Bell, CalendarDays, ChevronDown, Search } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "@/theme";
import { GradientButton, SecondaryButton } from "@/components/ui";

export function WebTopBar() {
  return (
    <View style={styles.topBar}>
      <View>
        <Text style={styles.kicker}>Dashboard</Text>
        <Text style={styles.title}>Smart breaks. Better you.</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.search}>
          <Search color={colors.dark.mutedText} size={18} />
          <Text style={styles.searchText}>Search breaks, goals, or keywords...</Text>
        </View>
        <SecondaryButton icon={<CalendarDays color={colors.dark.mutedText} size={18} />} label="Plan My Day" />
        <GradientButton icon={<Bell color={colors.dark.text} size={18} />} label="Start a Break" />
        <View style={styles.profile}>
          <Text style={styles.avatar}>AV</Text>
          <View>
            <Text style={styles.profileName}>Alex Verma</Text>
            <Text style={styles.profileMeta}>Pro Member</Text>
          </View>
          <ChevronDown color={colors.dark.mutedText} size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing[3],
  },
  avatar: {
    color: colors.dark.accent,
    fontSize: typography.size.md,
    fontWeight: typography.weight.black,
  },
  kicker: {
    color: colors.dark.accent,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
  },
  profile: {
    alignItems: "center",
    backgroundColor: colors.dark.card,
    borderColor: colors.dark.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing[3],
    minHeight: 54,
    paddingHorizontal: spacing[4],
  },
  profileMeta: {
    color: colors.dark.secondary,
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semibold,
  },
  profileName: {
    color: colors.dark.text,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
  },
  search: {
    alignItems: "center",
    backgroundColor: colors.dark.card,
    borderColor: colors.dark.border,
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing[2],
    height: 48,
    paddingHorizontal: spacing[4],
    width: 340,
  },
  searchText: {
    color: colors.dark.subtleText,
    fontSize: typography.size.sm,
  },
  title: {
    color: colors.dark.text,
    fontSize: typography.size.title,
    fontWeight: typography.weight.black,
    lineHeight: typography.lineHeight.title,
  },
  topBar: {
    alignItems: "center",
    borderBottomColor: colors.dark.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    height: spacing.topBarHeight,
    justifyContent: "space-between",
    paddingHorizontal: spacing.pageDesktop,
  },
});
