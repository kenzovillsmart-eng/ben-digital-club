import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0b0d' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showNav: {
      control: 'boolean',
      description: 'Show/hide navigation links',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Header with full navigation.
 */
export const Default: Story = {
  args: {
    showNav: true,
  },
  render: (args) => (
    <div>
      <Header {...args} />
      <div style={{ paddingTop: '100px', padding: '40px' }}>
        <p>Page content goes below the header...</p>
      </div>
    </div>
  ),
};

/**
 * Header with branding only (no navigation).
 */
export const BrandingOnly: Story = {
  args: {
    showNav: false,
  },
  render: (args) => (
    <div>
      <Header {...args} />
      <div style={{ paddingTop: '100px', padding: '40px' }}>
        <p>Simplified header for focused layouts...</p>
      </div>
    </div>
  ),
};

/**
 * Header in context of a full page.
 */
export const PageContext: Story = {
  render: () => (
    <div>
      <Header showNav={true} />
      <main style={{ paddingTop: '140px', padding: '40px' }}>
        <section style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <h1>Welcome to BenDigitalClub</h1>
          <p>
            This is how the header appears on a real page, with proper spacing and
            navigation hierarchy.
          </p>
        </section>
      </main>
    </div>
  ),
};
