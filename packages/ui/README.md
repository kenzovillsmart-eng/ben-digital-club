# @ben-digital-club/ui

Reusable React components for BenDigitalClub, built on top of the design-system tokens.

## Installation

```bash
pnpm add @ben-digital-club/ui
```

## Components

### Button

A flexible button component with primary and ghost variants.

```tsx
import { Button } from '@ben-digital-club/ui';

export function Example() {
  return (
    <>
      <Button>Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="lg">Large</Button>
      <Button size="sm">Small</Button>
    </>
  );
}
```

**Props:**
- `variant?: 'primary' | 'ghost'` (default: `'primary'`)
- `size?: 'sm' | 'md' | 'lg'` (default: `'md'`)
- `icon?: React.ReactNode` — Optional icon element
- `children: React.ReactNode` — Button text
- All standard `HTMLButtonElement` attributes

### Card

A flexible container component with surface styling and optional highlight variant.

```tsx
import { Card } from '@ben-digital-club/ui';

export function Example() {
  return (
    <>
      <Card>
        <h3>Default Card</h3>
        <p>Subtle surface styling</p>
      </Card>
      <Card highlighted>
        <h3>Featured Card</h3>
        <p>With accent border highlight</p>
      </Card>
    </>
  );
}
```

**Props:**
- `highlighted?: boolean` (default: `false`) — Adds accent border
- `children: React.ReactNode` — Card content
- All standard `HTMLDivElement` attributes

### Badge

A status or label indicator with semantic variants.

```tsx
import { Badge } from '@ben-digital-club/ui';

export function Example() {
  return (
    <>
      <Badge>Default</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="accent">Featured</Badge>
    </>
  );
}
```

**Props:**
- `variant?: 'default' | 'accent' | 'success' | 'warning' | 'error'` (default: `'default'`)
- `children: React.ReactNode` — Badge text
- All standard `HTMLSpanElement` attributes

### Header

A site header component with branding and optional navigation.

```tsx
import { Header } from '@ben-digital-club/ui';

export function Example() {
  return (
    <>
      <Header /> {/* With navigation */}
      <Header showNav={false} /> {/* Branding only */}
    </>
  );
}
```

**Props:**
- `showNav?: boolean` (default: `true`) — Show/hide navigation links

## Styling

All components use CSS Modules and reference design-system tokens through CSS custom properties.

### Custom Theming

The app layer (`apps/www/styles/globals.css`) defines CSS custom properties that components consume:

```css
:root {
  --accent: #ff5b1f;
  --surface: #14171c;
  --fg: #f5f1e8;
  /* ... more tokens ... */
}
```

To customize component styling, update these CSS variables in your app's global styles.

## Storybook

All components have interactive stories. Start Storybook:

```bash
pnpm storybook
```

Stories are located in `src/components/<Component>/<Component>.stories.tsx`.

## Development

### Building

```bash
# Build TypeScript and bundle
pnpm build

# Build Storybook static site
pnpm build-storybook
```

### Linting & Type Checking

```bash
pnpm lint
pnpm typecheck
```

### Testing

Tests are configured but not yet implemented. To add tests:

```bash
pnpm test
```

## Contributing

When adding a new component:

1. Create a directory: `src/components/ComponentName/`
2. Add files:
   - `ComponentName.tsx` — Component implementation
   - `ComponentName.module.css` — Component styles
   - `ComponentName.stories.tsx` — Storybook stories
   - `ComponentName.test.tsx` — Tests (if applicable)
   - `index.ts` — Export statement
3. Export from `src/components/index.ts`
4. Update this README with usage examples
5. Ensure all stories render correctly in Storybook
6. Run validation:
   ```bash
   pnpm lint
   pnpm typecheck
   ```

## Resources

- [Design System Tokens](../design-system/TOKENS.md)
- [Storybook Docs](https://storybook.js.org/docs/react/)
- [React Documentation](https://react.dev)
