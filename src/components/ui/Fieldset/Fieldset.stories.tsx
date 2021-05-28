import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Fieldset, FieldsetProps } from './Fieldset'

export default {
  title: 'UI Components/Fieldset',
  component: Fieldset,
} as Meta

const Template: Story<FieldsetProps> = (args) => <Fieldset {...args} />

export const Controllable = Template.bind({})
Controllable.args = {}
