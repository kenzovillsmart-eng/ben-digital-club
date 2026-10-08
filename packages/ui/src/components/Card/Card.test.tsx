import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Card>Card content</Card>);
    expect(getByText('Card content')).toBeInTheDocument();
  });

  it('applies default styles', () => {
    const { container } = render(<Card>Test</Card>);
    const card = container.querySelector('div');
    expect(card?.className).toContain('card');
  });

  it('applies highlighted class when prop is true', () => {
    const { container } = render(<Card highlighted>Highlighted</Card>);
    const card = container.querySelector('div');
    expect(card?.className).toContain('highlighted');
  });

  it('supports custom className', () => {
    const { container } = render(<Card className="custom-class">Test</Card>);
    const card = container.querySelector('div');
    expect(card?.className).toContain('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Ref Test</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
