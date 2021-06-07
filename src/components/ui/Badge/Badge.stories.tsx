import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Badge, { BadgeProps } from './Badge'

export default {
  title: 'Badge',
  component: Badge,
  decorators: [],
  parameters: [],
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Basic = Template.bind({})
Basic.args = {}
