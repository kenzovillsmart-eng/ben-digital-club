import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'success', 'warning', 'error'],
      description: 'Badge semantic variant',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge — neutral styling.
 */
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

/**
 * Accent badge — highlights featured or important items.
 */
export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Featured',
  },
};

/**
 * Success badge — indicates completion or positive status.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Active',
  },
};

/**
 * Warning badge — indicates caution or pending state.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Pending',
  },
};

/**
 * Error badge — indicates failure or blocked state.
 */
export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Failed',
  },
};

/**
 * All variants together.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

/**
 * Badge examples with status indicators.
 */
export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Badge variant="success">✓ Completed</Badge>
      </div>
      <div>
        <Badge variant="warning">⏱ In Progress</Badge>
      </div>
      <div>
        <Badge variant="error">✕ Failed</Badge>
      </div>
      <div>
        <Badge variant="accent">★ Featured</Badge>
      </div>
    </div>
  ),
};
