import React from 'react'
import { Chip } from './Chip'

import type { Story as StoryType, Meta } from '@storybook/react'
import type { ChipProps } from './Chip'

export default {
  title: 'UI Components/Chip/Story',
  component: Chip,
  decorators: [],
  parameters: [],
} as Meta

const Template: StoryType<ChipProps> = (args) => (
  <>
    <Chip {...args} label="Basic" />
    <Chip {...args} avatar={{ label: 'M' }} label="Avatar" />
  </>
)

export const Story = Template.bind({})
Story.args = {}
