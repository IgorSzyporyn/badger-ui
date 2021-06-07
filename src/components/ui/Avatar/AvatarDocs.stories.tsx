import React from 'react'
import { Avatar } from './Avatar'

import type { Story, Meta } from '@storybook/react'
import type { AvatarProps } from './Avatar'

export default {
  title: 'UI Components/Avatar/Documentation',
  component: Avatar,
  parameters: {
    docsOnly: true,
    facelift: {
      docs: {
        type: 'simple',
      },
    },
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Documentation = Template.bind({})
Documentation.args = {
  alt: 'required',
}
