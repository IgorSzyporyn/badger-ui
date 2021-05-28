import React from 'react'
import { Colors as ColorStory } from './story-components/Colors'

import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Colors',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    status: {
      type: 'releaseCandidate',
      url: 'https://www.figma.com/file/yl44JcFlLYJ1IHwE6JzbUl/Level-2.-Rollout?node-id=601%3A1018',
    },
  },
} as Meta

export const Colors: Story = () => <ColorStory />
