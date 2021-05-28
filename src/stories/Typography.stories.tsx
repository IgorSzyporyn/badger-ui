import React from 'react'
import { Typography as TypographyStory } from './story-components/Typography'

import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Typography',
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

export const Typography: Story = () => <TypographyStory />
