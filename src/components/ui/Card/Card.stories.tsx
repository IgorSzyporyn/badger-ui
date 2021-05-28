import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Card, CardProps } from './Card'

export default {
  title: 'UI Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story<CardProps> = (args) => (
  <Card {...args} style={{ height: 300, width: 300 }} />
)

export const Controllable = Template.bind({})
Controllable.args = {}
