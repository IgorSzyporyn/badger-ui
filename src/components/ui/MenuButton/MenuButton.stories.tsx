import React from 'react'
import { MenuButton } from './MenuButton'

import type { Story, Meta } from '@storybook/react'
import type { MenuButtonProps } from './MenuButton'

export default {
  title: 'UI Components/MenuButton',
  component: MenuButton,
  decorators: [],
  parameters: [],
} as Meta

const Template: Story<MenuButtonProps> = (args) => <MenuButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Menu Button',
  menu: (
    <div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </div>
  ),
}
