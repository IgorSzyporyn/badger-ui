import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar } from './Avatar'

export default {
  title: 'UI Components/Avatar/Presentation',
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
  <>
    <h3>Just an image source</h3>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        alt="Erik"
        size="xlarge"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        alt="Erik"
        size="large"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        alt="Erik"
        size="normal"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        alt="Erik"
        size="medium"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        alt="Erik"
        size="small"
        style={{ marginRight: 16 }}
      />
    </div>
    <h3>Just a label</h3>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
      <Avatar label="EB" alt="Erik" size="xlarge" style={{ marginRight: 16 }} />
      <Avatar label="EB" alt="Erik" size="large" style={{ marginRight: 16 }} />
      <Avatar label="EB" alt="Erik" size="normal" style={{ marginRight: 16 }} />
      <Avatar label="EB" alt="Erik" size="medium" style={{ marginRight: 16 }} />
      <Avatar label="EB" alt="Erik" size="small" style={{ marginRight: 16 }} />
    </div>
    <h3>Image source & label</h3>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        label="EB"
        alt="Erik"
        size="xlarge"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        label="EB"
        alt="Erik"
        size="large"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        label="EB"
        alt="Erik"
        size="normal"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        label="EB"
        alt="Erik"
        size="medium"
        style={{ marginRight: 16 }}
      />
      <Avatar
        src="https://avatars.githubusercontent.com/u/32451595"
        label="EB"
        alt="Erik"
        size="small"
        style={{ marginRight: 16 }}
      />
    </div>
    <h3>Or use an icon</h3>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar alt="Erik" size="xlarge" style={{ marginRight: 16 }} icon="ARViewer" />
      <Avatar
        type="secondary"
        alt="Erik"
        size="large"
        style={{ marginRight: 16 }}
        icon="link"
      />
      <Avatar
        type="call2action"
        alt="Erik"
        size="normal"
        style={{ marginRight: 16 }}
        icon="attachment"
      />
      <Avatar
        type="error"
        alt="Erik"
        size="medium"
        style={{ marginRight: 16 }}
        icon="emoticon"
      />
      <Avatar
        type="success"
        alt="Erik"
        size="small"
        style={{ marginRight: 16 }}
        icon="close"
      />
    </div>
  </>
)
