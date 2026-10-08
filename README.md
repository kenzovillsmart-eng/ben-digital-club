# BenDigitalClub

Monorepo for the BenDigitalClub site. A focused digital club for people creating meaningful products, brands, and experiences.

## Project Structure

```
.
├── apps/
│   └── www/              # Next.js 14 landing page and main site
├── packages/
│   ├── design-system/    # Shared design tokens (colors, spacing, typography)
│   └── ui/               # Reusable React components (Button, Card, Badge, Header)
├── .github/              # GitHub workflows and configuration
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (use with `nvm` for version management)
- **pnpm** 9.15.0+ (workspaces-enabled package manager)

### Installation

```bash
# Install all workspace dependencies
pnpm install
```

### Development

```bash
# Start the Next.js dev server
pnpm dev

# Or run Storybook for UI components
pnpm storybook
```

### Building

```bash
# Build all packages and apps
pnpm build

# Build only the design-system or UI package
pnpm --filter @ben-digital-club/design-system build
pnpm --filter @ben-digital-club/ui build
```

### Validation

```bash
# Run linting across the monorepo
pnpm lint

# Run TypeScript type checking
pnpm typecheck

# Run tests
pnpm test
```

## Architecture

### Design System (`packages/design-system`)

Centralized design tokens that ensure visual consistency across the product.

**Exported tokens:**
- `colors` — Brand palette (backgrounds, surfaces, text, accents)
- `spacing` — Scale from 4px to 128px
- `radius` — Rounded corner values (6px to 999px)
- `fontFamilies` — Display, UI, and mono typefaces
- `fontSize` — Scale from 11px to 48px

**Usage:**
```typescript
import { colors, spacing, radius } from '@ben-digital-club/design-system';
```

### UI Components (`packages/ui`)

Reusable React components built on top of design tokens.

**Available components:**
- **Button** — Primary and ghost variants, multiple sizes
- **Card** — Flexible container with hover states and highlight variant
- **Badge** — Status indicators with semantic variants (default, accent, success, warning, error)
- **Header** — Site navigation with brand mark and optional nav links

**Props and usage:**
Each component is fully typed with React.forwardRef support for ref access. See Storybook for interactive examples:

```bash
pnpm storybook
```

### Main App (`apps/www`)

Next.js 14 application with App Router. Uses design-system tokens and UI components for consistent styling.

**Key files:**
- `app/page.tsx` — Landing page with hero, feature sections, and CTA
- `app/layout.tsx` — Root layout with metadata
- `styles/globals.css` — App-wide styles using CSS custom properties mapped to design tokens

## Workspace Commands

### Install & Setup

```bash
pnpm install              # Install all dependencies
pnpm clean                # Remove node_modules and build artifacts
```

### Development

```bash
pnpm dev                  # Start main app dev server (Next.js)
pnpm storybook            # Launch Storybook for UI component development
```

### Build & Output

```bash
pnpm build                # Build all packages and apps
pnpm build --filter <pkg> # Build a single package (e.g., @ben-digital-club/ui)
```

### Validation

```bash
pnpm lint                 # Run ESLint across all packages
pnpm typecheck            # Run TypeScript compiler without emit
pnpm test                 # Run test suites (if configured)
```

### Troubleshooting

If you encounter issues with workspace linking:

```bash
# Clear pnpm cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Contributing

### Branch Naming

Use descriptive branch names:
- Feature: `feat/short-description`
- Bugfix: `fix/short-description`
- Refactor: `refactor/short-description`

### Commit Messages

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `refactor:` Code reorganization
- `test:` Test additions or fixes
- `chore:` Tooling, dependencies, configuration

Example: `feat: add logout functionality`

### Pull Requests

1. Create a feature branch from `main`
2. Make your changes and commit with conventional messages
3. Run validation before pushing:
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```
4. Open a PR with a clear title and description of changes
5. Ensure CI passes and request review

## Design Token Reference

### Colors

```typescript
{
  bg: '#0a0b0d',           // Primary background
  bgElev: '#0f1115',       // Elevated background
  surface: '#14171c',      // Card/surface background
  surface2: '#1b1f26',     // Secondary surface
  surface3: '#232831',     // Tertiary surface
  border: 'rgba(...)',     // Default border
  borderStrong: 'rgba(...)', // Strong border
  borderAccent: 'rgba(...)', // Accent border
  fg: '#f5f1e8',           // Foreground text
  fgMuted: '#a3a7b0',      // Muted text
  fgDim: '#6b7078',        // Dim text
  fgFaint: '#4a4e56',      // Faint text
  accent: '#ff5b1f',       // Primary accent (orange)
  accentSoft: '#ff7a4a',   // Soft accent
  accentGlow: 'rgba(...)', // Accent glow effect
  mint: '#7dffc4',         // Secondary accent
  amber: '#ffd166',        // Warning accent
  rose: '#ff5d7a',         // Error accent
  violet: '#a78bfa',       // Tertiary accent
}
```

### Spacing Scale

```typescript
{
  s1: '4px',    s2: '8px',    s3: '12px',   s4: '16px',
  s5: '20px',   s6: '24px',   s8: '32px',   s10: '40px',
  s12: '48px',  s16: '64px',  s20: '80px',  s24: '96px',
  s32: '128px', s40: '160px'
}
```

### Radius Scale

```typescript
{
  sm: '6px',      md: '10px',    lg: '14px',
  xl: '20px',     2xl: '28px',   full: '999px'
}
```

### Typography

**Font Families:**
- Display: Fraunces (serif)
- UI: Inter Tight (sans-serif)
- Mono: JetBrains Mono

**Font Sizes:**
```typescript
{
  xs: '11px',    sm: '13.5px',  base: '16px',  lg: '18px',
  xl: '22px',    2xl: '28px',   3xl: '34px',   4xl: '48px'
}
```

## Component API

### Button

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}
```

### Card

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlighted?: boolean;
  children: React.ReactNode;
}
```

### Badge

```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}
```

### Header

```typescript
interface HeaderProps {
  showNav?: boolean;
}
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Storybook Documentation](https://storybook.js.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [pnpm Workspace Guide](https://pnpm.io/workspaces)

## License

MIT
