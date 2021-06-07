import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Paper, PaperProps } from './Paper'

export default {
  title: 'UI Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story<PaperProps> = (args) => (
  <Paper {...args} style={{ height: 300, width: 300 }} />
)

export const Controllable = Template.bind({})
Controllable.args = {}
