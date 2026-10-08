# Design System Tokens

Centralized design values for BenDigitalClub. All tokens are exported from `@ben-digital-club/design-system`.

## Colors

### Core Palette

```typescript
export const colors = {
  // Backgrounds
  bg: '#0a0b0d',              // Primary background
  bgElev: '#0f1115',          // Elevated background (containers, modals)
  
  // Surfaces
  surface: '#14171c',         // Card and surface background
  surface2: '#1b1f26',        // Secondary surface (hover states)
  surface3: '#232831',        // Tertiary surface
  
  // Borders
  border: 'rgba(255,255,255,0.07)',      // Default border
  borderStrong: 'rgba(255,255,255,0.14)', // Strong border
  borderAccent: 'rgba(255,91,31,0.35)',   // Accent border
  
  // Foreground / Text
  fg: '#f5f1e8',              // Primary text (high contrast)
  fgMuted: '#a3a7b0',         // Secondary text
  fgDim: '#6b7078',           // Tertiary text
  fgFaint: '#4a4e56',         // Disabled text
  
  // Accents
  accent: '#ff5b1f',          // Primary accent (orange)
  accentSoft: '#ff7a4a',      // Soft accent (hover)
  accentGlow: 'rgba(255,91,31,0.45)', // Glow effect
  
  // Semantic Colors
  mint: '#7dffc4',            // Success/positive accent
  mintGlow: 'rgba(125,255,196,0.3)',
  amber: '#ffd166',           // Warning accent
  rose: '#ff5d7a',            // Error/negative accent
  violet: '#a78bfa',          // Info/tertiary accent
  
  // Utility
  grid: 'rgba(255,255,255,0.035)', // Grid/divider overlay
};
```

### Usage in CSS

```css
:root {
  --bg: #0a0b0d;
  --surface: #14171c;
  --fg: #f5f1e8;
  --accent: #ff5b1f;
}

body {
  background: var(--bg);
  color: var(--fg);
}

.card {
  background: var(--surface);
  border-color: var(--border);
}
```

### Usage in TypeScript

```typescript
import { colors } from '@ben-digital-club/design-system';

const theme = {
  primaryColor: colors.accent,
  textColor: colors.fg,
  surfaceColor: colors.surface,
};
```

## Spacing

A scale from 4px to 160px, suitable for padding, margins, and gaps.

```typescript
export const spacing = {
  s1: '4px',    // Extra small
  s2: '8px',    // Small
  s3: '12px',
  s4: '16px',   // Base unit
  s5: '20px',
  s6: '24px',   // Medium
  s8: '32px',
  s10: '40px',
  s12: '48px',  // Large
  s16: '64px',
  s20: '80px',  // Extra large
  s24: '96px',
  s32: '128px',
  s40: '160px', // Maximum
};
```

### Recommended Usage

- **Component padding:** s3–s6 (12px–24px)
- **Component margins:** s4–s8 (16px–32px)
- **Section gaps:** s20–s24 (80px–96px)
- **Gutters:** s3–s6 (12px–24px)

## Border Radius

A scale for consistent rounded corners.

```typescript
export const radius = {
  sm: '6px',      // Buttons, small components
  md: '10px',     // Form inputs, medium components
  lg: '14px',     // Cards, larger components
  xl: '20px',     // Modals, large containers
  '2xl': '28px',  // Extra large containers
  full: '999px',  // Pills, badges, circular elements
};
```

### Recommended Usage

- **Buttons:** `radius.full` (pill shape)
- **Cards:** `radius.lg` or `radius.xl`
- **Badges:** `radius.md` or `radius.lg`
- **Inputs:** `radius.md`
- **Modals:** `radius.xl` or `radius.2xl`

## Typography

### Font Families

```typescript
export const fontFamilies = {
  display: "'Fraunces', Georgia, serif",    // Headlines, display text
  ui: "'Inter Tight', system-ui, sans-serif", // Body, UI text
  mono: "'JetBrains Mono', monospace",      // Code, technical content
};
```

### Font Sizes

```typescript
export const fontSize = {
  xs: '11px',    // Small labels, captions
  sm: '13.5px',  // Body small, helper text
  base: '16px',  // Body default
  lg: '18px',    // Body large, callout
  xl: '22px',    // Heading level 6
  '2xl': '28px', // Heading level 5
  '3xl': '34px', // Heading level 4
  '4xl': '48px', // Heading level 3
};
```

### Recommended Usage

- **Headings (h1):** fontSize.4xl, fontFamilies.display
- **Headings (h2):** fontSize.3xl, fontFamilies.display
- **Headings (h3):** fontSize.2xl, fontFamilies.display
- **Body text:** fontSize.base, fontFamilies.ui
- **Small text:** fontSize.sm, fontFamilies.ui
- **Code blocks:** fontSize.sm, fontFamilies.mono

## Integration with Components

All UI components (`Button`, `Card`, `Badge`, `Header`) are built using these tokens.

### Example: Custom Component

```typescript
import { colors, spacing, radius } from '@ben-digital-club/design-system';
import styles from './MyComponent.module.css';

export function MyComponent() {
  return (
    <div 
      style={{
        backgroundColor: colors.surface,
        padding: spacing.s4,
        borderRadius: radius.lg,
        color: colors.fg,
      }}
    >
      Content
    </div>
  );
}
```

## Adding New Tokens

1. Update the relevant token file in `packages/design-system/tokens/`
2. Export from `packages/design-system/index.ts`
3. Update this documentation
4. Rebuild the design-system package: `pnpm --filter @ben-digital-club/design-system build`
5. Create a PR with a clear description of the new tokens and use cases

## Maintenance

Tokens should:
- Be updated only for product-wide changes
- Maintain backward compatibility when possible
- Have clear semantic meaning (e.g., `accent` not `orange`)
- Be documented with use cases and examples
- Be tested in Storybook and the main app before merging
