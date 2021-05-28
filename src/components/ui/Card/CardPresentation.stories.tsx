import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Card } from './Card'

export default {
  title: 'UI Components/Card/Presentation',
  parameters: {
    layout: 'centered',
    options: {
      showPanel: false,
    },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
} as Meta

export const Presentation: Story = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: 32 }}>
    <div>
      <h3>Elevation 0</h3>
      <Card style={{ width: 200, height: 200 }} elevation={0} />
    </div>
    <div>
      <h3>Elevation 1</h3>
      <Card style={{ width: 200, height: 200 }} elevation={1} />
    </div>
    <div>
      <h3>Elevation 2</h3>
      <Card style={{ width: 200, height: 200 }} elevation={2} />
    </div>
    <div>
      <h3>Elevation 3</h3>
      <Card style={{ width: 200, height: 200 }} elevation={3} />
    </div>
    <div>
      <h3>Elevation 4</h3>
      <Card style={{ width: 200, height: 200 }} elevation={4} />
    </div>
    <div>
      <h3>Elevation 5</h3>
      <Card style={{ width: 200, height: 200 }} elevation={5} />
    </div>
  </div>
)
