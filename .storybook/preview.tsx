import React from 'react'
import { createTheme } from '../src/theme/create-theme'

import { addDecorator } from '@storybook/react'
import { GlobalStyles } from '../src/components/theme/GlobalStyles/GlobalStyles'

import type { Parameters } from '@storybook/react'

const light = createTheme({ type: 'light' })
const dark = createTheme({ type: 'dark' })

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
))

export const parameters: Parameters = {
  actions: { disable: true, argTypesRegex: '^on[A-Z].*' },
  design: { disable: true },
  backgrounds: { disable: true },
  performance: { disable: true },
  test: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  facelift: {
    enhanceUi: true,
    addProvider: true,
    provider: 'styled',
    providerTheme: 'custom-1',
    defaultVariant: 'dark',
    override: {
      brandImage:
        'data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXCAYAAADUUxW8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc2RDZCOTg0QjY5ODExRUI4REY1OTQxMEY1OTQyMUVGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2RDZCOTgzQjY5ODExRUI4REY1OTQxMEY1OTQyMUVGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMUQzRTgzQjY2MTExRUJCMzQzQTE3QUNDMkYzN0FCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDMUQzRTg0QjY2MTExRUJCMzQzQTE3QUNDMkYzN0FCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bihD6gAAAEpJREFUeNpiZJj6/z8DDvA/i4GR4QAjTnkmBgrAqGYSAeN/3DFFhGaGcty6/3cwMniOxvMwiGeWaQ6fcOrOOsDHOBrag0UzQIABAIbnFSqqeAvuAAAAAElFTkSuQmCC',
      brandTitle: 'Facelift UI',
    },
    ui: {
      padding: '32px',
    },
    docs: {
      hideControls: true,
      type: 'simple',
    },
    themes: [
      {
        type: 'badgerui',
        key: 'custom-1',
        title: 'Badger UI theme',
        provider: 'styled',
        variants: { light, dark },
      },
      {
        type: 'mui',
        key: 'mui-2',
        title: 'Material UI',
        variants: { light: {}, dark: {} },
      },
    ],
  },
}
