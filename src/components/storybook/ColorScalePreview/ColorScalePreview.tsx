import React from 'react'
import styled from 'styled-components'

import type {
  ColorScale,
  ColorScaleType,
  TypographyScale,
  TypographyScaleType,
} from '../../../theme/types'

export type ColorScalePreviewProps = {
  colorScale: ColorScale
  title: string
} & React.HTMLAttributes<HTMLDivElement>

const previewColors: Array<keyof ColorScale> = [
  'darkest',
  'darker',
  'dark',
  'normal',
  'light',
  'lighter',
  'lightest',
  'dimmed',
]

const typographyColors: Array<keyof TypographyScale> = [
  'text',
  'textDimmed',
  'textInverse',
  'textInverseDimmed',
]

export const ColorScalePreview = ({
  colorScale,
  title,
  ...rest
}: ColorScalePreviewProps) => {
  return (
    <ColorWrapper {...rest}>
      <ColorTypeTitle>{title}</ColorTypeTitle>
      <ColorTypeKey>theme.color.{title}</ColorTypeKey>
      <ColorList columns={previewColors.length}>
        {Object.keys(colorScale).map((_scaleKey, scaleIndex) => {
          const scaleKey = _scaleKey as ColorScaleType
          const allowPreview = previewColors.includes(scaleKey)

          return (
            allowPreview && (
              <ColorItem key={`${scaleIndex}`}>
                <ColorBox color={colorScale[scaleKey]}>
                  <ColorTypographyWrapper>
                    {typographyColors.map((_typographyKey) => {
                      const typographyKey = _typographyKey as TypographyScaleType
                      return (
                        <ColorTypography color={colorScale[typographyKey]}>
                          <ColorTypographyTitle>{typographyKey}</ColorTypographyTitle>
                        </ColorTypography>
                      )
                    })}
                  </ColorTypographyWrapper>
                </ColorBox>
                <ColorTitle>
                  <div>{scaleKey}</div>
                  <div>{colorScale[scaleKey]}</div>
                </ColorTitle>
              </ColorItem>
            )
          )
        })}
      </ColorList>
    </ColorWrapper>
  )
}

const ColorWrapper = styled.div``

const ColorTypeTitle = styled.h2`
  margin: 4px 0 2px;
  font-size: 18px;
`

const ColorTypeKey = styled.h3`
  margin: 4px 0 12px;
  font-size: 13px;
  font-weight: 400;
  opacity: 0.7;
`

type ColorListProps = {
  columns: number
}

const ColorList = styled.div<ColorListProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => '1fr '.repeat(columns)};
  grid-column-gap: 16px;
`

const ColorItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ColorBox = styled.div`
  padding-top: 100%;
  width: 100%;
  background-color: ${({ color }) => color};
  position: relative;
  border-radius: 3px;
`

const ColorTypographyWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 8px;
`

type ColorTypographyProps = {
  color: string
}

const ColorTypography = styled.div<ColorTypographyProps>`
  color: ${({ color }) => color};
`

const ColorTypographyTitle = styled.div`
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 2px;
`

const ColorTitle = styled.div`
  margin-top: 4px;
  text-align: center;
  font-size: 13px;

  & > div:first-of-type {
    font-weight: 500;
    margin-bottom: 4px;
  }

  & > div:last-of-type {
    font-size: 10px;
    font-weight: 300;
  }
`
