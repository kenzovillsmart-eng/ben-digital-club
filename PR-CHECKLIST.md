# PR Checklists

## PR #1: Add monorepo workspace config and root scripts

### Pre-submission
- [ ] Verify root `package.json` has correct workspace glob patterns
- [ ] Test `pnpm install` works from repo root
- [ ] Test `pnpm dev` launches the Next.js app
- [ ] Test `pnpm build` succeeds for all packages
- [ ] Test `pnpm lint` runs across all packages
- [ ] Test `pnpm typecheck` validates TypeScript
- [ ] Verify `.gitignore` excludes node_modules, dist, .next, .env
- [ ] Verify `.npmrc` has correct pnpm version requirement
- [ ] Confirm tsconfig.json path aliases work for imports

### Code review
- [ ] Workspace configuration is correct and complete
- [ ] Scripts are non-destructive and fail fast on errors
- [ ] Version pinning is appropriate for the team
- [ ] Documentation (README) mentions pnpm requirement
- [ ] No hardcoded paths or local-only settings

### Post-merge
- [ ] Update CI/CD to use `pnpm` instead of npm or yarn
- [ ] Document setup instructions in README
- [ ] Verify GitHub Actions use correct pnpm commands

---

## PR #2: Implement shared Header and app-level layout system

### Pre-submission
- [ ] Header component renders without errors
- [ ] Header.stories.tsx displays all variants in Storybook
- [ ] Header exports from `packages/ui/src/components/index.ts`
- [ ] App imports Header from `@ben-digital-club/ui`
- [ ] Landing page renders with Header visible
- [ ] Site-shell components export correctly
- [ ] All TypeScript interfaces are properly typed
- [ ] Mobile layout still works with Header positioning
- [ ] Storybook builds without warnings

### Code review
- [ ] Header component is properly typed with React.forwardRef
- [ ] CSS module classes are applied correctly
- [ ] Navigation links have proper hrefs
- [ ] Accessibility attributes (aria-label) are in place
- [ ] Site-shell components follow naming conventions
- [ ] No missing imports or circular dependencies

### Post-merge
- [ ] Verify Header appears on production preview
- [ ] Test mobile navigation is accessible
- [ ] Check z-index stacking doesn't conflict with other elements

---

## PR #3: Align UI with design-system tokens

### Pre-submission
- [ ] Design-system exports from `packages/design-system/index.ts`
- [ ] `packages/design-system/package.json` has correct exports
- [ ] UI theme imports all token types successfully
- [ ] TOKENS.md is complete with examples
- [ ] CSS custom properties map to token values
- [ ] No lint errors in token files
- [ ] TypeScript compilation succeeds for design-system
- [ ] Components still render with token-driven colors

### Code review
- [ ] Token structure is semantically clear (e.g., accent vs accentSoft)
- [ ] TOKENS.md documentation is accurate and helpful
- [ ] Theme file imports are clean and organized
- [ ] No redundant or unused token definitions
- [ ] Examples in docs are runnable and correct

### Post-merge
- [ ] Verify UI components consume tokens correctly
- [ ] Test that changing a token value updates app visually
- [ ] Document token usage in contributor guide

---

## PR #4: Create reusable landing-page section components

### Pre-submission
- [ ] Site-shell components have TypeScript interfaces
- [ ] Landing page refactor compiles without errors
- [ ] All Sections render with correct styling
- [ ] FeatureCard hover effects work on desktop
- [ ] Mobile breakpoints work (760px, 480px)
- [ ] Hero section responsive grid collapses correctly
- [ ] Feature grid responsive columns on mobile
- [ ] All content is semantically correct (h1, h2, h3)
- [ ] No layout shifts on responsive resize

### Code review
- [ ] Components are properly exported with clear interfaces
- [ ] Responsive layout uses mobile-first approach
- [ ] Spacing uses consistent scale (gap, padding, margin)
- [ ] Color usage aligns with design-system tokens
- [ ] Transitions and hover states are smooth
- [ ] No inline styles; all in CSS modules or globals

### Post-merge
- [ ] Test on real mobile devices (iOS, Android)
- [ ] Verify touch interactions work on mobile
- [ ] Check performance on slow networks

---

## PR #5: Add Storybook coverage and validation

### Pre-submission
- [ ] Storybook builds without errors
- [ ] All component stories render correctly
- [ ] Stories have proper argTypes and descriptions
- [ ] Test files compile without errors
- [ ] Button tests cover variants and sizes
- [ ] Card tests cover highlighted state
- [ ] Badge tests cover all semantic variants
- [ ] Header tests cover nav and branding states
- [ ] `packages/ui/README.md` is comprehensive
- [ ] API docs are accurate and complete

### Code review
- [ ] Stories use Storybook best practices
- [ ] Tests follow Vitest/Jest conventions
- [ ] Documentation includes usage examples
- [ ] All component props are documented
- [ ] No missing export statements
- [ ] Autodocs tags are correctly applied

### Post-merge
- [ ] Deploy Storybook to static host (Vercel, GitHub Pages, etc.)
- [ ] Add Storybook link to README
- [ ] Set up visual regression testing (Percy, Chromatic)
- [ ] Train team on running Storybook locally

---

## Final Integration Checklist (All PRs)

### Before merging all PRs to main
- [ ] All 5 PRs have been approved
- [ ] All CI checks pass
- [ ] No merge conflicts
- [ ] Commit history is clean and readable
- [ ] Branch is up-to-date with main

### After merging all PRs
- [ ] README.md is updated with new commands
- [ ] CONTRIBUTING.md is updated with branching strategy
- [ ] Version is bumped (0.1.0 → 0.2.0 or similar)
- [ ] Release notes are published
- [ ] Team is notified of changes
- [ ] Dev environment works for all team members
