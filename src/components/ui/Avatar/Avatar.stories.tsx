import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { withPerformance } from 'storybook-addon-performance'
import { Avatar } from './Avatar'
import results from '../../../../.jest-test-results.json'

import type { Story as StoryType, Meta } from '@storybook/react'
import type { AvatarProps } from './Avatar'

export default {
  title: 'UI Components/Avatar/Story',
  component: Avatar,
  decorators: [withTests({ results }), withPerformance],
  options: {
    showPanel: true,
  },
  parameters: {
    performance: { disable: false },
    test: { disable: false },
    layout: 'centered',
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

const Template: StoryType<AvatarProps> = (args) => <Avatar {...args} />

export const Story = Template.bind({})
Story.args = {
  src: 'https://avatars.githubusercontent.com/u/32451595',
  alt: 'Erik Beuschau',
}
