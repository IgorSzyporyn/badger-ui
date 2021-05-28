import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'UI Components/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Controllable = Template.bind({})
Controllable.args = {
  label: 'Checkbox',
}
