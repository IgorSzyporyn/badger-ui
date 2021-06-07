import React, { useRef } from 'react'
import { nanoid } from 'nanoid'
import styled, { useTheme } from 'styled-components'
import { ColorScalePreview } from '../../components/storybook/ColorScalePreview/ColorScalePreview'

export const Colors = () => {
  const theme = useTheme()
  const idRef = useRef(nanoid())

  return theme ? (
    <div>
      <h1>Color</h1>
      <h4 style={{ marginBottom: 16 }}>theme.color</h4>
      {Object.keys(theme.color).map((colorKey, index) => {
        const color = theme.color[colorKey]
        const key = `${idRef.current}-${index}`

        return <ColorScale key={key} title={colorKey} colorScale={color} />
      })}
    </div>
  ) : (
    <div>No Theme found in context provider</div>
  )
}

const ColorScale = styled(ColorScalePreview)`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`
