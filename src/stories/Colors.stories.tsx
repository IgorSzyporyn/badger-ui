import React from 'react'
import { Colors as ColorStory } from './story-components/Colors'

import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Colors',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

export const Colors: Story = () => <ColorStory />
