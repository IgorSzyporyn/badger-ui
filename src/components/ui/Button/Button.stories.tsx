import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { withDesign } from 'storybook-addon-designs'
import { withPerformance } from 'storybook-addon-performance'
import { Button } from './Button'
import results from '../../../../.jest-test-results.json'

import type { Story, Meta } from '@storybook/react'
import type { ButtonProps } from './Button'

export default {
  title: 'UI Components/Button',
  component: Button,
  decorators: [withDesign, withTests({ results }), withPerformance],
  parameters: {
    actions: { handles: ['click', 'dblclick'] },
    layout: 'centered',
    options: { showPanel: true },
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
  jest: ['Button.test.tsx'],
}
