import React from 'react'
import { Tag } from './Tag'

import type { Story } from '@storybook/react'
import type { Meta } from 'storybook-facelift'
import type { TagProps } from './Tag'

export default {
  title: 'UI Components/Tag',
  component: Tag,
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args} />

export const Controllable = Template.bind({})
Controllable.args = {
  label: 'Tag',
}
