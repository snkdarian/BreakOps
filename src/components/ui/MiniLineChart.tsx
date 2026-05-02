import Svg, { Defs, LinearGradient as SvgGradient, Path, Stop } from "react-native-svg";
import { View, StyleSheet, type StyleProp, type ViewStyle } from "react-native";
import { colors, palette } from "@/theme";

type MiniLineChartProps = {
  height?: number;
  style?: StyleProp<ViewStyle>;
};

export function MiniLineChart({ height = 72, style }: MiniLineChartProps) {
  return (
    <View style={[styles.wrap, { height }, style]}>
      <Svg width="100%" height="100%" viewBox="0 0 240 72" preserveAspectRatio="none">
        <Defs>
          <SvgGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={palette.blue500} />
            <Stop offset="0.48" stopColor={palette.cyan400} />
            <Stop offset="1" stopColor={palette.violet400} />
          </SvgGradient>
        </Defs>
        <Path d="M0 54 C22 40 28 62 48 42 C66 20 78 46 96 31 C118 13 128 26 144 38 C164 54 174 42 192 29 C210 15 218 18 240 8" fill="none" stroke="url(#line)" strokeWidth={4} strokeLinecap="round" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.dark.surface,
    overflow: "hidden",
    width: "100%",
  },
});
