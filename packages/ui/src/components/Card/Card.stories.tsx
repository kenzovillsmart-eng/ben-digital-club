import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    highlighted: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <h3 style={{ marginBottom: '12px', fontFamily: 'var(--font-display)' }}>Card Title</h3>
      <p style={{ marginBottom: '16px', color: 'var(--fg-muted)' }}>
        This is a default card component with content.
      </p>
      <Button variant="ghost" size="sm">Learn more</Button>
    </Card>
  ),
};

export const Highlighted: Story = {
  render: (args) => (
    <Card {...args} highlighted>
      <h3 style={{ marginBottom: '12px', fontFamily: 'var(--font-display)' }}>Featured Card</h3>
      <p style={{ marginBottom: '16px', color: 'var(--fg-muted)' }}>
        This card is highlighted to draw attention.
      </p>
      <Button variant="primary" size="sm">Get started</Button>
    </Card>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {[1, 2, 3].map((i) => (
        <Card key={i} highlighted={i === 2}>
          <h3 style={{ marginBottom: '12px', fontFamily: 'var(--font-display)' }}>Card {i}</h3>
          <p style={{ color: 'var(--fg-muted)' }}>Content for card {i}</p>
        </Card>
      ))}
    </div>
  ),
};
