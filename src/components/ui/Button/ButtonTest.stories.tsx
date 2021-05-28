import React from 'react'
import { Meta } from 'storybook-facelift'
import results from '../../../../.jest-test-results.json'
import { withTests } from '@storybook/addon-jest'
import { Button } from './Button'

export default {
  title: 'UI Components/Button/Test',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { disabled: true },
    actions: { disabled: true },
    a11y: { disabled: true },
    decorators: [withTests({ results })],
    options: {
      showPanel: true,
    },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    facelift: {
      addProvider: false,
    },
  },
} as Meta

export const Test = () => <div>Jest results in storybook</div>

Test.parameters = {
  jest: ['./Button.test.tsx'],
}
