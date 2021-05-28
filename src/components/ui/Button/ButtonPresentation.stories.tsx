import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ButtonPreview } from '../../storybook/ButtonPreview/ButtonPreview'

export default {
  title: 'UI Components/Button/Presentation',
  parameters: {
    layout: 'centered',
    controls: { disabled: true },
    actions: { disabled: true },
    a11y: { disabled: true },
    options: {
      showPanel: false,
    },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

export const Presentation: Story = () => <ButtonPreview />
