import { useMemo } from "react";
import { Platform, useWindowDimensions } from "react-native";

export type Breakpoint = "mobile" | "tablet" | "desktop" | "wide";

export function useResponsive() {
  const { width, height } = useWindowDimensions();

  return useMemo(() => {
    const breakpoint: Breakpoint =
      width >= 1360 ? "wide" : width >= 1024 ? "desktop" : width >= 768 ? "tablet" : "mobile";

    return {
      width,
      height,
      breakpoint,
      isMobile: breakpoint === "mobile",
      isTablet: breakpoint === "tablet",
      isDesktop: breakpoint === "desktop" || breakpoint === "wide",
      isWide: breakpoint === "wide",
      isWeb: Platform.OS === "web",
    };
  }, [height, width]);
}
