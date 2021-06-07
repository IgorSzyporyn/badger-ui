import React from 'react'
import { Badge } from './Badge'

import type { Story, Meta } from '@storybook/react'
import type { BadgeProps } from './Badge'

export default {
  title: 'UI Components/Badge',
  component: Badge,
  decorators: [],
  parameters: [],
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Basic = Template.bind({})
Basic.args = {}
