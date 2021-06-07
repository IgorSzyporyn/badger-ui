import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { withDesign } from 'storybook-addon-designs'
import { withPerformance } from 'storybook-addon-performance'
import { Button } from './Button'
import results from '../../../../.jest-test-results.json'

import type { Story as StoryType, Meta } from '@storybook/react'
import type { ButtonProps } from './Button'

export default {
  title: 'UI Components/Button/Story',
  component: Button,
  decorators: [withDesign, withTests({ results }), withPerformance],
  options: {
    showPanel: true,
  },
  parameters: {
    design: {
      disable: false,
      type: 'figma',
      url: 'https://www.figma.com/file/5mFcEtOiU4TJQf40SHA2E8/Facelift-UI',
    },
    layout: 'centered',
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

const Template: StoryType<ButtonProps> = (args) => <Button {...args} />

export const Story = Template.bind({})

Story.args = {
  label: 'Button',
}

Story.parameters = {
  jest: ['Button.test.tsx'],
}
