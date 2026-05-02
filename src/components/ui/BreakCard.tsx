import type { ReactNode } from "react";
import { Clock, Zap } from "lucide-react-native";
import { ImageBackground, StyleSheet, Text, View, type ImageSourcePropType, type StyleProp, type ViewStyle } from "react-native";
import { colors, radius, spacing, typography } from "@/theme";
import type { Accent, BreakDifficulty } from "@/types";
import { GradientButton } from "./GradientButton";
import { SecondaryButton } from "./SecondaryButton";
import { StatusBadge } from "./StatusBadge";

type BreakCardProps = {
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: BreakDifficulty;
  accent?: Accent;
  image?: ImageSourcePropType;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function BreakCard({ accent = "cyan", category, description, difficulty, duration, icon, image, style, title }: BreakCardProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.visual}>
        {image ? <ImageBackground source={image} resizeMode="cover" style={styles.image} /> : <View style={styles.iconWrap}>{icon}</View>}
      </View>
      <StatusBadge accent={accent} label={category} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.meta}>
        <Clock color={colors.dark.mutedText} size={15} />
        <Text style={styles.metaText}>{duration}</Text>
        <Zap color={colors.dark.mutedText} size={15} />
        <Text style={styles.metaText}>{difficulty}</Text>
      </View>
      <View style={styles.actions}>
        <GradientButton label="Start" style={styles.actionButton} />
        <SecondaryButton label="Save" style={styles.actionButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    gap: spacing[3],
    marginTop: spacing[2],
  },
  card: {
    backgroundColor: colors.dark.card,
    borderColor: colors.dark.border,
    borderRadius: radius.card,
    borderWidth: 1,
    gap: spacing[2],
    padding: spacing[4],
  },
  description: {
    color: colors.dark.mutedText,
    fontSize: typography.size.md,
    lineHeight: typography.lineHeight.md,
  },
  iconWrap: {
    alignItems: "center",
    backgroundColor: colors.dark.surface,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },
  meta: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing[1],
  },
  metaText: {
    color: colors.dark.mutedText,
    fontSize: typography.size.sm,
  },
  title: {
    color: colors.dark.text,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    lineHeight: typography.lineHeight.xl,
  },
  visual: {
    aspectRatio: 1.55,
    borderRadius: radius.lg,
    overflow: "hidden",
  },
});
