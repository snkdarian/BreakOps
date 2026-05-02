import { palette } from "./colors";

export const gradients = {
  appBackground: [palette.navy950, palette.navy925, palette.navy900],
  card: ["rgba(13, 25, 48, 0.94)", "rgba(5, 10, 24, 0.92)"],
  cardHover: ["rgba(17, 36, 72, 0.96)", "rgba(8, 15, 34, 0.94)"],
  hero: ["rgba(8, 123, 255, 0.28)", "rgba(110, 66, 255, 0.22)", "rgba(3, 7, 19, 0)"],
  buttonPrimary: [palette.blue600, palette.cyan500, palette.violet500],
  buttonSecondary: ["rgba(22, 230, 255, 0.16)", "rgba(110, 66, 255, 0.14)"],
  ring: [palette.cyan400, palette.blue500, palette.violet500, palette.purple500],
  chartLine: [palette.blue500, palette.cyan400, palette.violet400],
  warning: [palette.amber400, palette.purple500],
  success: [palette.mint400, palette.cyan400],
} as const;

export type GradientName = keyof typeof gradients;
