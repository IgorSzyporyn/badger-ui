import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { CollapsibleBox } from './CollapsibleBox'

import type { CollapsibleBoxProps } from './CollapsibleBox'

export default {
  title: 'UI Components/CollapsibleBox',
  component: CollapsibleBox,
  decorators: [],
  parameters: {
    actions: { disable: true },
    design: { disable: true },
  },
} as Meta

const Template: Story<CollapsibleBoxProps> = (args) => (
  <CollapsibleBox {...args}>some content</CollapsibleBox>
)

export const Controllable = Template.bind({})
Controllable.args = {
  style: {
    borderRadius: '5px',
  },
  BodyProps: {
    style: {
      height: 300,
      backgroundColor: '#ff0000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}
