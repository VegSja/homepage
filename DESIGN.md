# Design System

## 1. Tokens
- **Colors**:
  - Background Light: `bg-gray-50`
  - Background Dark: `bg-gray-950`
  - Text Light: `text-gray-900`
  - Text Dark: `text-gray-100`
  - Accent: Emerald (`accent-500` to `accent-600` for text, `accent-500/10` for subtle backgrounds)
- **Typography**:
  - Sans: Inter Variable (`font-sans`)
  - Mono: JetBrains Mono Variable (`font-mono`)
- **Spacing**: Tailwind default 4px grid.
- **Border Radius**: Subtle (`rounded-lg`, `rounded-md`). No fully pill-shaped items except tags.

## 2. Component Primitives
- **Card**: `border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg p-6 hover:border-accent-500/50 transition-colors`
- **Tag**: `text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md`
- **Link**: `text-accent-600 dark:text-accent-400 hover:underline decoration-accent-500/30 underline-offset-4`

## 3. Motion
- Subtle hover state transitions (`duration-200`).
- No layout animations.
