# BreakOps Implementation Tracker

Status legend:
- `Not started` - not implemented yet
- `In progress` - currently being implemented
- `Done` - implemented and verified for this phase
- `Blocked` - needs user input, credentials, or external setup

## Current Position

Current step: **Step 2 - Supabase SQL schema, RLS, indexes, triggers, seed data**

Documentation rule: every step and meaningful feature must update this tracker plus the detailed `README.md`. Larger features can get dedicated docs later and should be linked from `README.md`.

## Steps

| Step | Scope | Status | Notes |
| --- | --- | --- | --- |
| 1 | Setup Expo project, dependencies, folder structure, dark/neon design tokens, responsive layout shell, base UI components | Done | TypeScript check passed. Web export/build smoke test passed. Components import centralized theme tokens. |
| 2 | Supabase SQL schema, RLS, indexes, triggers, seed data | Not started | Keep master prompt as DB source. |
| 3 | Supabase client, Auth context, session persistence | Not started | AsyncStorage for native, OAuth redirects for web later. |
| 4 | Auth screens | Not started | Login, register, forgot password, OAuth buttons. |
| 5 | Onboarding and profile save | Not started | First-run flow and Supabase profile creation. |
| 6 | Full theme system and light/dark/system mode | Not started | Dark-first foundation exists in Step 1; persistence comes later. |
| 7 | Plan generator | Not started | Break scheduling based on preferences, day mode, moods. |
| 8 | Dashboard and today plan | Not started | Must use web sidebar/topbar/grid/right panel and mobile stacked tabs. |
| 9 | Break timer | Not started | Timer screen, progress circle, feedback. |
| 10 | Stats and last 7 days history | Not started | Desktop charts, streak, consistency, weekly progress. |
| 11 | Mood/status feature | Not started | All-day and interval statuses. |
| 12 | Notifications | Not started | Local/push notification foundation. |
| 13 | Responsive web polish | Not started | Prioritize reference-image desktop layouts. |
| 14 | Final UI polish | Not started | Compare all screens against reference images. |
| 15 | Cleanup, refactor, production-readiness checklist | Not started | Final quality pass. |

## Step 1 Checklist

- [x] Project config: `package.json`, Expo config, TypeScript config
- [x] Folder structure: `src/app`, `components`, `theme`, `hooks`, `services`, `lib`, `types`
- [x] Theme tokens: colors, gradients, shadows, spacing, radius, typography, index export
- [x] Responsive layout shell: AppShell, WebSidebar, WebTopBar, WebRightPanel, MobileTabBar, ResponsiveContainer
- [x] Base UI components: cards, buttons, score ring, stat/break/insight cards, badges, progress, chart placeholder, states
- [x] Step 1 preview screen
- [x] TypeScript/build check

## Verification Log

- Step 1: `npm run typecheck` passed.
- Step 1: `npx expo export --platform web` passed and exported to `dist`.
- Step 1: scanned `src/components` and `src/app` for raw hex/rgba colors; none found outside theme tokens.
- Step 1: `README.md` added with detailed setup, structure, design system, responsive behavior, verification, and documentation rules.
- Step 1: web export passed again after Expo-compatible dependency alignment.
- Step 1 fix: repaired web SVG warning in `RecoveryScoreRing` by replacing `rotation/origin` with an SVG group transform.
- Step 1 fix: repaired desktop preview layout squeeze by constraining hero copy, score, chart, and topbar widths.
- Step 1 fix: `npm run typecheck` and `npx expo export --platform web` passed after the layout/SVG repair.
