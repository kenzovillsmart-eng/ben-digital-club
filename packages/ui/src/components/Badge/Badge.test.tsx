import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders with text content', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies default variant by default', () => {
    const { container } = render(<Badge>Default</Badge>);
    const badge = container.querySelector('span');
    expect(badge?.className).toContain('badge-default');
  });

  it('applies specified variant', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    const badge = container.querySelector('span');
    expect(badge?.className).toContain('badge-success');
  });

  it('supports all variant types', () => {
    const variants = ['default', 'accent', 'success', 'warning', 'error'] as const;
    variants.forEach((variant) => {
      const { container } = render(<Badge variant={variant}>{variant}</Badge>);
      const badge = container.querySelector('span');
      expect(badge?.className).toContain(`badge-${variant}`);
    });
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>Ref</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
