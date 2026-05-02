import type { PropsWithChildren } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { spacing } from "@/theme";
import { useResponsive } from "@/hooks/useResponsive";

type ResponsiveContainerProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function ResponsiveContainer({ children, style }: ResponsiveContainerProps) {
  const { isDesktop } = useResponsive();

  return <View style={[styles.container, isDesktop ? styles.desktop : styles.mobile, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "100%",
  },
  desktop: {
    maxWidth: spacing.maxContentWidth,
    padding: spacing.pageDesktop,
  },
  mobile: {
    padding: spacing.pageMobile,
    paddingBottom: spacing.mobileTabHeight + spacing[6],
  },
});
