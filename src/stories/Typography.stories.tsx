import React from 'react'
import { Typography as TypographyStory } from './story-components/Typography'

import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Typography',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

export const Typography: Story = () => <TypographyStory />
