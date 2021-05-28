import { createColorScale } from './color'

import type { ThemeConfig, ThemeColorType, ThemeColor } from '../types'

export function convertColor<T>({
  color,
  type,
  wcag,
  named,
  background,
}: ThemeConfig<T>) {
  const colors: Partial<ThemeColor> = {}

  Object.keys(color).forEach((key) => {
    const colorType = key as ThemeColorType
    let scaleType: 'color' | 'grey' = 'color'

    switch (colorType) {
      case 'grey':
        scaleType = 'grey'
        break
      default:
        break
    }

    if (colorType !== 'border') {
      const colorScale = createColorScale({
        color: color[colorType],
        themeType: type,
        scaleType,
        wcag,
      })

      if (colorScale) {
        colors[colorType] = colorScale
      }
    }
  })

  Object.keys(named).forEach((key) => {
    const colorType = key as ThemeColorType

    const colorScale = createColorScale({
      color: color[colorType],
      themeType: type,
      scaleType: 'color',
      wcag,
    })

    if (colorScale) {
      colors[colorType] = colorScale
    }
  })

  const borderColorScale = createColorScale({
    color: background.body,
    themeType: type,
    scaleType: 'border',
    wcag,
  })

  if (borderColorScale) {
    colors.border = borderColorScale
  }

  return colors as ThemeColor
}
