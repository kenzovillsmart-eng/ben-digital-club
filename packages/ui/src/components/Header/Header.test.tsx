import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders brand name', () => {
    render(<Header />);
    expect(screen.getByText('BenDigitalClub')).toBeInTheDocument();
  });

  it('renders navigation by default', () => {
    render(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Join')).toBeInTheDocument();
  });

  it('hides navigation when showNav is false', () => {
    const { container } = render(<Header showNav={false} />);
    const nav = container.querySelector('nav');
    expect(nav).not.toBeInTheDocument();
  });

  it('renders navigation links with correct href', () => {
    render(<Header />);
    const aboutLink = screen.getByText('About');
    const joinLink = screen.getByText('Join');
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(joinLink).toHaveAttribute('href', '#join');
  });

  it('renders header element correctly', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });
});
