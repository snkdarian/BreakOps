import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "BreakOps",
  slug: "breakops",
  scheme: "breakops",
  version: "0.1.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  web: {
    bundler: "metro",
    output: "single",
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
