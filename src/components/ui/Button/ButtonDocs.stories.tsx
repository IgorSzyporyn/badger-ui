import React from 'react'
import { Button } from './Button'

import type { Story, Meta } from '@storybook/react'
import type { ButtonProps } from './Button'

export default {
  title: 'UI Components/Button/Documentation',
  component: Button,
  parameters: {
    docsOnly: true,
    facelift: {
      docs: {
        type: 'simple',
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Documentation = Template.bind({})
Documentation.args = {}
