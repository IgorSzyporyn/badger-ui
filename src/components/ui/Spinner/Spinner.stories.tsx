import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Spinner, SpinnerProps } from './Spinner'

export default {
  title: 'UI Components/Spinner',
  component: Spinner,
} as Meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Controllable = Template.bind({})
Controllable.args = {}
