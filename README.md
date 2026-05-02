# BreakOps

BreakOps is a cross-platform productivity and recovery app for developers and desk workers. The product helps users plan and complete smart micro-breaks for eyes, posture, wrists, mental reset, energy, and end-of-day recovery.

This repository is being built step by step from the master product prompt in `Prompts and assets/Prompt front.txt`. The current implementation has completed **Step 1**, which establishes the project foundation, dark/neon design system, responsive shell, and reusable UI primitives.

## Current Status

The project is currently at:

**Next step: Step 2 - Supabase SQL schema, RLS, indexes, triggers, and seed data**

Progress is tracked in [IMPLEMENTATION_STEPS.md](./IMPLEMENTATION_STEPS.md). That file is the short operational tracker for reopening the work later. This README is the detailed explanation of the architecture, decisions, and current feature surface.

## Product Direction

The BreakOps feature scope remains driven by the master prompt:

- Expo + React Native + TypeScript
- Expo Router
- Supabase Auth and DB
- Email/password auth, Google OAuth, Apple login preparation
- Supabase-backed profiles, plans, breaks, stats, moods, settings, and history
- Local biometric unlock later via Expo Local Authentication
- Local/push notifications later via Expo Notifications
- Responsive web and mobile UI

The visual direction has been overridden by the reference images and design override:

- Dark mode first
- Futuristic, cyber, premium SaaS dashboard
- Dark navy / near-black surfaces, not plain black
- Neon blue, cyan, violet, and purple accents
- Glowing cards and luminous borders
- Subtle glassmorphism
- Rounded cards around 20-28px
- Gradient buttons from blue to violet
- Luminous progress rings and chart placeholders
- Fixed web sidebar, web top bar, and right insights panel
- Mobile bottom tabs and stacked vertical layout

If a generic UI note from the original prompt conflicts with the reference-image direction, the reference-image direction wins for UI only. Product behavior, DB, auth, and feature scope still come from the master prompt.

## Step 1: What Was Implemented

Step 1 builds the foundation only. It does not implement Supabase, auth flows, database logic, generated plans, notifications, or real user data yet.

Implemented foundation:

- Expo project configuration
- TypeScript strict configuration
- Expo Router entry and initial route
- Modular source structure under `src`
- Centralized design tokens
- Responsive layout shell
- Reusable UI components
- Static preview dashboard to validate the visual system
- TypeScript and web export verification

## Project Structure

```text
BreakOps/
  src/
    app/
      _layout.tsx
      index.tsx
    components/
      layout/
      ui/
    hooks/
    lib/
    services/
    theme/
    types/
  IMPLEMENTATION_STEPS.md
  README.md
  app.config.ts
  babel.config.js
  package.json
  tsconfig.json
```

### `src/app`

Expo Router uses `src/app` as the routing root.

- `_layout.tsx` defines the root stack and dark status bar.
- `index.tsx` is the Step 1 preview dashboard.

The preview dashboard exists only to exercise the layout and UI components. It uses static visual data such as recovery score, upcoming breaks, and focus areas. This is acceptable for Step 1 because no Supabase-backed feature has been implemented yet.

### `src/theme`

All visual primitives live here. Components should import colors, spacing, radius, typography, gradients, and shadows from `@/theme`.

Files:

- `colors.ts`
- `gradients.ts`
- `shadows.ts`
- `spacing.ts`
- `radius.ts`
- `typography.ts`
- `index.ts`

The goal is to avoid random hardcoded styling throughout the app. Components should remain design-system consumers, not independent style islands.

### `src/components/layout`

The layout shell establishes the responsive app frame:

- `AppShell`
- `WebSidebar`
- `WebTopBar`
- `WebRightPanel`
- `MobileTabBar`
- `ResponsiveContainer`
- `LogoMark`

Desktop behavior:

- Left sidebar
- Top header
- Main scrollable dashboard area
- Right insights panel

Mobile behavior:

- No web sidebar
- No web right panel
- Stacked content
- Bottom tab bar

### `src/components/ui`

Reusable UI primitives created in Step 1:

- `AppCard`
- `GlowCard`
- `GradientCard`
- `GradientButton`
- `SecondaryButton`
- `RecoveryScoreRing`
- `StatCard`
- `BreakCard`
- `UpcomingBreakCard`
- `InsightCard`
- `StatusBadge`
- `ProgressBar`
- `MiniLineChart`
- `EmptyState`
- `LoadingState`
- `SkeletonCard`

These components are intentionally presentational. They do not know about Supabase, auth, user sessions, plan generation, or notifications.

## Design System Notes

### Colors

The dark theme uses navy and near-black surfaces with luminous accents. Important token groups:

- Background and elevated surfaces
- Card and muted card surfaces
- Text, muted text, subtle text
- Border and strong border colors
- Primary, secondary, accent, success, warning, danger, info
- Chart colors
- Navigation active/inactive states

Raw hex colors are allowed inside `src/theme`. Feature and UI components should consume tokens from `@/theme`.

### Radius

Cards use large rounded corners to match the premium dashboard references:

- Standard card: `radius.card`
- Large card: `radius.cardLarge`
- Buttons: `radius.button`
- Pills and badges: `radius.pill`

### Shadows and Glow

Glow presets are centralized in `theme/shadows.ts`:

- `card`
- `glowCyan`
- `glowViolet`
- `button`
- `activeNav`

This keeps glow intensity adjustable from one location during the final polish pass.

### Gradients

Gradient tokens live in `theme/gradients.ts`:

- App background
- Card overlays
- Primary button gradient
- Secondary glass gradient
- Progress ring gradient
- Chart line gradient

Gradient usage currently relies on `expo-linear-gradient` and `react-native-svg` where appropriate.

## Responsive Behavior

The `useResponsive` hook maps screen width into:

- `mobile`
- `tablet`
- `desktop`
- `wide`

Current behavior:

- Desktop and wide screens render the full SaaS dashboard shell.
- Mobile and tablet render stacked content with bottom tabs.

Later responsive polish in Step 13 will refine exact breakpoint behavior, sidebar width, density, panel collapse rules, and chart/card scaling.

## How To Run

Install dependencies:

```bash
npm install
```

Run the web app:

```bash
npm run web
```

Run the Expo dev server:

```bash
npm start
```

Type-check:

```bash
npm run typecheck
```

Export web build:

```bash
npx expo export --platform web
```

## Verification Completed

Step 1 verification completed:

- `npm run typecheck` passes.
- `npx expo export --platform web` passes.
- `src/components` and `src/app` were scanned for raw hex/rgba colors; no raw component colors were found outside theme tokens.
- Critical React Native package versions were aligned with Expo's compatibility warning:
  - `react@19.2.0`
  - `react-dom@19.2.0`
  - `react-native@0.83.6`
  - `react-native-safe-area-context@5.6.2`
  - `react-native-screens@4.23.0`
  - `react-native-svg@15.15.3`

Note: `npm install` currently reports moderate vulnerabilities in transitive dependencies. No automatic `npm audit fix` was applied because that can introduce broad dependency changes. This should be reviewed later as part of production readiness.

## Documentation Rule Going Forward

For every implementation step and meaningful feature, update both:

- `IMPLEMENTATION_STEPS.md` with concise status and current position
- `README.md` with a clear explanation of what was added, why it exists, how it works, and how to verify it

When a feature becomes large enough, create a dedicated Markdown document under a future `docs/` folder and link it from this README.

## Next Step

Step 2 will add the Supabase schema plan implementation:

- SQL tables
- check constraints
- indexes
- Row Level Security
- policies
- seed data for break types
- `updated_at` trigger support

Step 2 should not alter the Step 1 design system unless the DB work reveals naming or type needs that must be shared with the frontend.
