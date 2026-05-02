import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Defs, G, LinearGradient as SvgGradient, Stop } from "react-native-svg";
import { colors, palette, shadows, typography } from "@/theme";

type RecoveryScoreRingProps = {
  score: number;
  label?: string;
  size?: number;
};

export function RecoveryScoreRing({ label = "Great", score, size = 164 }: RecoveryScoreRingProps) {
  const strokeWidth = Math.max(10, size * 0.08);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, score));
  const dashOffset = circumference - (circumference * clamped) / 100;

  return (
    <View style={[styles.wrap, { height: size, width: size }]}>
      <Svg width={size} height={size}>
        <Defs>
          <SvgGradient id="scoreRing" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={palette.cyan400} />
            <Stop offset="0.48" stopColor={palette.blue500} />
            <Stop offset="1" stopColor={palette.purple500} />
          </SvgGradient>
        </Defs>
        <Circle cx={size / 2} cy={size / 2} r={radius} stroke={colors.dark.cardMuted} strokeWidth={strokeWidth} fill="transparent" />
        <G transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#scoreRing)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View style={styles.content}>
        <Text style={styles.score}>{clamped}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  label: {
    color: colors.dark.accent,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semibold,
  },
  score: {
    color: colors.dark.text,
    fontSize: typography.size.display,
    fontWeight: typography.weight.black,
    lineHeight: typography.lineHeight.display,
  },
  wrap: {
    ...shadows.glowCyan,
    alignItems: "center",
    justifyContent: "center",
  },
});
