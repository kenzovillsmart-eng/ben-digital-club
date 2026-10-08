import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    highlighted: {
      control: 'boolean',
      description: 'Add accent border highlight',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card with subtle surface styling.
 */
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Card Title</h3>
        <p>Card content goes here. Cards are flexible containers for grouped content.</p>
      </div>
    ),
  },
};

/**
 * Highlighted card with accent border — use for featured content.
 */
export const Highlighted: Story = {
  args: {
    highlighted: true,
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Featured Card</h3>
        <p>This card has an accent border to draw attention to featured content.</p>
      </div>
    ),
  },
};

/**
 * Card with rich content.
 */
export const RichContent: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginTop: 0 }}>Feature Overview</h3>
        <p>Cards work great for organizing content into scannable, clickable sections.</p>
        <ul>
          <li>Easy to scan</li>
          <li>Hover effects included</li>
          <li>Flexible for any content</li>
        </ul>
      </div>
    ),
  },
};

/**
 * Multiple cards in a grid.
 */
export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '20px',
        maxWidth: '1000px',
      }}
    >
      <Card>
        <h4 style={{ marginTop: 0 }}>Card 1</h4>
        <p>First card in grid</p>
      </Card>
      <Card highlighted>
        <h4 style={{ marginTop: 0 }}>Card 2 (Featured)</h4>
        <p>Featured card in grid</p>
      </Card>
      <Card>
        <h4 style={{ marginTop: 0 }}>Card 3</h4>
        <p>Third card in grid</p>
      </Card>
    </div>
  ),
};
