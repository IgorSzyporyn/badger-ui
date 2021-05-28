import React from 'react'
import { ButtonPreview } from '../../storybook/ButtonPreview/ButtonPreview'

import type { Story, Meta } from '@storybook/react'

export default {
  title: 'UI Components/Button/Presentation',
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    actions: { disable: true },
    a11y: { disable: true },
    test: { disable: true },
    performance: { disable: true },
    options: {
      showPanel: false,
    },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

export const Presentation: Story = () => <ButtonPreview />
