# PR Descriptions for Sequential Merge

Use these exact descriptions when creating the 5 PRs on GitHub.

---

## PR #1: Add monorepo workspace config and root scripts

**Title:** Add monorepo workspace config and root scripts

**Description:**

This foundational PR establishes the monorepo structure using pnpm workspaces, enabling consistent development workflows across all packages. It adds root-level scripts for install, build, lint, typecheck, test, and Storybook development, configures TypeScript path aliases for internal package imports, and sets up version pinning for reproducible installs. This creates a reliable developer experience and ensures every package can be built and validated consistently from the repository root.

**Key Changes:**
- Configure pnpm workspaces for `apps/` and `packages/`
- Add root-level scripts for install, dev, build, lint, typecheck, test, clean, and storybook
- Set up TypeScript path aliases for `@ben-digital-club/*` imports
- Pin pnpm version to 9.15.0+ for consistency
- Improve .gitignore and .eslintignore for monorepo

**Related Issues:**
Closes #[ISSUE_NUMBER] (if any)

**Testing:**
- [ ] `pnpm install` works from repo root
- [ ] `pnpm dev` launches Next.js app
- [ ] `pnpm build` succeeds for all packages
- [ ] `pnpm lint` runs across workspaces
- [ ] `pnpm typecheck` validates TypeScript

**Checklist:**
- [ ] README updated with setup instructions
- [ ] No hardcoded paths or local-only settings
- [ ] All scripts fail fast on errors
- [ ] CI/CD is ready to be updated (follow-up)

---

## PR #2: Implement shared Header and app-level layout system

**Title:** Implement shared Header and app-level layout system

**Description:**

This PR introduces the first reusable app-level layout primitive by creating a shared `Header` component in the UI library and refactoring the landing page into composable sections (Hero, Section, FeatureCard, CTABlock). The Header component features a brand mark, optional navigation links, and proper accessibility attributes, while the site-shell components provide a structured foundation for future pages. By wiring these components together on the landing page, this PR establishes a pattern for maintainable and scalable page layouts.

**Key Changes:**
- Create `Header` component in `packages/ui/src/components/Header/`
- Export Header from `packages/ui/src/components/index.ts`
- Create reusable page shell components (Hero, Section, FeatureCard, CTABlock)
- Refactor landing page to use new component structure
- Add Header Storybook stories and tests
- Improve page layout spacing and semantic HTML

**Depends On:**
- #1 (monorepo workspace config)

**Related Issues:**
Closes #[ISSUE_NUMBER] (if any)

**Testing:**
- [ ] Header renders without errors
- [ ] Header stories display correctly in Storybook
- [ ] Landing page renders with Header visible
- [ ] Mobile navigation is accessible
- [ ] No z-index conflicts

**Checklist:**
- [ ] Header uses React.forwardRef properly
- [ ] CSS module classes applied correctly
- [ ] Accessibility attributes in place (aria-label)
- [ ] No circular dependencies
- [ ] Storybook builds without warnings

---

## PR #3: Align UI with design-system tokens

**Title:** Align UI with design-system tokens

**Description:**

This PR centralizes the visual system by establishing proper exports from the design-system package and documenting the complete token contract (colors, spacing, radius, typography). The UI theme layer is updated to consume these tokens, and CSS custom properties are aligned to the shared values, eliminating duplication and improving maintainability. Comprehensive documentation in `TOKENS.md` guides future component development and ensures visual consistency across the entire product.

**Key Changes:**
- Create `packages/design-system/index.ts` with token exports
- Create `packages/design-system/package.json` with exports config
- Create `packages/design-system/TOKENS.md` with comprehensive reference
- Update `packages/ui/src/theme/index.ts` to import all tokens
- Map CSS custom properties to design tokens
- Add integration examples for custom components

**Depends On:**
- #2 (Header and page shell components)

**Related Issues:**
Closes #[ISSUE_NUMBER] (if any)

**Testing:**
- [ ] Design-system exports work correctly
- [ ] UI theme imports all token types successfully
- [ ] CSS custom properties map to token values
- [ ] Components render with token-driven colors
- [ ] TypeScript compilation succeeds

**Checklist:**
- [ ] Token structure is semantically clear
- [ ] TOKENS.md documentation is accurate
- [ ] Theme imports are clean and organized
- [ ] No redundant token definitions
- [ ] Examples in docs are runnable

---

## PR #4: Create reusable landing-page section components

**Title:** Create reusable landing-page section components

**Description:**

This PR refactors the landing page from inline markup into modular, reusable section components that are easier to scale and maintain. It improves the responsive behavior with mobile-first breakpoints (760px and 480px), adds refined hover states and transitions, and ensures proper semantic HTML structure. The page is now organized into clearly defined content blocks (Hero, Feature Grid, CTA sections) that can be easily replicated and extended for new marketing pages.

**Key Changes:**
- Implement Hero, Section, FeatureCard, CTABlock page components
- Add TypeScript interfaces for all component props
- Enhance globals.css with improved typography hierarchy
- Add responsive breakpoints for tablet (760px) and mobile (480px)
- Implement hover effects on cards and buttons
- Improve semantic HTML with proper heading hierarchy
- Refactor landing page to use new components

**Depends On:**
- #3 (design-system token alignment)

**Related Issues:**
Closes #[ISSUE_NUMBER] (if any)

**Testing:**
- [ ] All sections render with correct styling
- [ ] FeatureCard hover effects work on desktop
- [ ] Mobile breakpoints work correctly (760px, 480px)
- [ ] Hero section grid collapses correctly on mobile
- [ ] No layout shifts on responsive resize
- [ ] Tested on real mobile devices (iOS, Android)

**Checklist:**
- [ ] Components are properly exported
- [ ] Responsive layout uses mobile-first approach
- [ ] Spacing uses consistent scale
- [ ] Color usage aligns with design tokens
- [ ] Transitions and hover states are smooth
- [ ] No inline styles; all in CSS modules

---

## PR #5: Add Storybook coverage and validation

**Title:** Add Storybook coverage and validation

**Description:**

This PR expands the visual documentation and validation surface of the UI library by adding comprehensive Storybook stories for all components (Button, Card, Badge, Header) with interactive variants and proper TypeScript documentation. Lightweight test scaffolding is introduced for component rendering and prop validation, and a detailed `packages/ui/README.md` provides API documentation and usage examples. This foundation makes the component library ready for visual regression testing, manual QA, and confident future development.

**Key Changes:**
- Expand Storybook stories for Button, Card, Badge, Header with multiple variants
- Add Storybook autodocs tags for automatic documentation
- Create lightweight test scaffolding for all components
- Add `packages/ui/README.md` with component API reference
- Include usage examples and Storybook launch instructions
- Configure TypeScript exports from UI package
- Update package.json with test scripts

**Depends On:**
- #4 (landing page section components)

**Related Issues:**
Closes #[ISSUE_NUMBER] (if any)

**Testing:**
- [ ] Storybook builds without errors
- [ ] All component stories render correctly
- [ ] Stories have proper argTypes and descriptions
- [ ] Test files compile without errors
- [ ] Button tests cover variants and sizes
- [ ] Card tests cover highlighted state
- [ ] Badge tests cover all semantic variants
- [ ] Header tests cover nav and branding states

**Checklist:**
- [ ] Stories use Storybook best practices
- [ ] Tests follow Vitest/Jest conventions
- [ ] Documentation includes usage examples
- [ ] All component props are documented
- [ ] No missing export statements
- [ ] Autodocs tags correctly applied
- [ ] Ready for Percy/Chromatic integration

---

## Final Integration (After All 5 PRs)

**Verification Checklist:**
- [ ] All 5 PRs approved and passing CI
- [ ] No merge conflicts
- [ ] Commit history clean and readable
- [ ] Branch up-to-date with main
- [ ] README updated with new commands
- [ ] CONTRIBUTING.md updated with branching strategy
- [ ] Version bumped (0.1.0 → 0.2.0)
- [ ] Release notes published
- [ ] Team notified of changes
- [ ] Dev environment works for all team members

**Merge Strategy:**
1. Merge PR #1 first (foundation)
2. Merge PR #2 (depends on #1)
3. Merge PR #3 (depends on #2)
4. Merge PR #4 (depends on #3)
5. Merge PR #5 (depends on #4)
6. Create release tag and publish release notes

---

**Generated:** October 8, 2026
**Status:** Ready for GitHub PR creation
