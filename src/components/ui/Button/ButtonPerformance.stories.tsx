import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from './Button'

import type { ButtonProps } from './Button'

export default {
  title: 'UI Components/Button/Performance',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { disabled: true },
    actions: { disabled: true },
    a11y: { disabled: true },
    options: { showPanel: false },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

const array1000 = [...Array(5000).keys()]
const array5000 = [...Array(5000).keys()]
const array10000 = [...Array(5000).keys()]

export const Render1000Buttons: Story<ButtonProps> = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: 8,
    }}
  >
    {array1000.map((i) => (
      <Button key={`Button-Render-Test-${i}`} label={`#${i}`} />
    ))}
  </div>
)

export const Render5000Buttons: Story<ButtonProps> = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: 8,
    }}
  >
    {array5000.map((i) => (
      <Button key={`Button-Render-Test-${i}`} label={`#${i}`} />
    ))}
  </div>
)

export const Render10000Buttons: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: 8,
    }}
  >
    {array10000.map((i) => (
      <Button key={`Button-Render-Test-${i}`} label={`#${i}`} {...args} />
    ))}
  </div>
)
