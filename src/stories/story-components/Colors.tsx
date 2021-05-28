import React from 'react'
import { ColorScalePreview } from '../../components/storybook/ColorScalePreview/ColorScalePreview'
import styled, { useTheme } from 'styled-components'

export const Colors = () => {
  const theme = useTheme()

  return (
    <div>
      <h1>Color</h1>
      <h4 style={{ marginBottom: 16 }}>theme.color</h4>
      {Object.keys(theme.color).map((key) => {
        const color = theme.color[key]

        return <ColorScale title={key} colorScale={color} />
      })}
    </div>
  )
}

const ColorScale = styled(ColorScalePreview)`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`
