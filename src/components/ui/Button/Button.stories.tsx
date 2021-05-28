import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withTests } from '@storybook/addon-jest'
import { withDesign } from 'storybookaddon-designs'
import results from '../../../../.jest-test-results.json'
import { Button } from './Button'

import type { ButtonProps } from './Button'

export default {
  title: 'UI Components/Button',
  component: Button,
  decorators: [withDesign, withTests({ results })],
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
    status: {
      type: 'stable',
      url: 'http://www.someurl.com',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yl44JcFlLYJ1IHwE6JzbUl/Level-2.-Rollout?node-id=601%3A1018',
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Controllable = Template.bind({})

Controllable.args = {
  label: 'Button',
}

Controllable.parameters = {
  jest: ['./Button.test.tsx'],
}
