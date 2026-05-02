import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients, radius, shadows, spacing, typography } from "@/theme";

export function LogoMark() {
  return (
    <View style={styles.row}>
      <LinearGradient colors={gradients.buttonPrimary} style={styles.mark}>
        <Text style={styles.markText}>B</Text>
      </LinearGradient>
      <View>
        <Text style={styles.name}>BreakOps</Text>
        <Text style={styles.tagline}>Smart breaks. Better you.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mark: {
    ...shadows.glowCyan,
    alignItems: "center",
    borderRadius: radius.sm,
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  markText: {
    color: colors.dark.text,
    fontSize: typography.size.title,
    fontWeight: typography.weight.black,
    lineHeight: typography.lineHeight.title,
  },
  name: {
    color: colors.dark.text,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.black,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing[3],
  },
  tagline: {
    color: colors.dark.mutedText,
    fontSize: typography.size.xs,
  },
});
