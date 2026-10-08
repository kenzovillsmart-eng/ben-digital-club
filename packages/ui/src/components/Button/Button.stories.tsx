import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary button variant — use for main actions.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
  },
};

/**
 * Ghost button variant — use for secondary actions.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Secondary Action',
  },
};

/**
 * Small button size.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

/**
 * Medium button size (default).
 */
export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

/**
 * Large button size — use for prominent CTAs.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large CTA',
  },
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * All variants and sizes together.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" size="sm">
        Primary Small
      </Button>
      <Button variant="primary" size="md">
        Primary Medium
      </Button>
      <Button variant="primary" size="lg">
        Primary Large
      </Button>
      <Button variant="ghost" size="sm">
        Ghost Small
      </Button>
      <Button variant="ghost" size="md">
        Ghost Medium
      </Button>
      <Button variant="ghost" size="lg">
        Ghost Large
      </Button>
    </div>
  ),
};
