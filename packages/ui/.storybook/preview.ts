import type { Preview } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        background: 'var(--bg)', 
        color: 'var(--fg)',
        minHeight: '100vh',
        padding: '24px'
      }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
