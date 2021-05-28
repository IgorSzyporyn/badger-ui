import Color from 'color'
import { getContrastColor } from '../get-contrast-color'

import type {
  ColorScale,
  ThemeType,
  TypographyScale,
  ThemeWCAGRatingType,
} from '../types'

const wcagThresholdMap: Record<ThemeWCAGRatingType, number> = {
  AA: 149,
  AAA: 77,
}

export const rgbColorParamToString = ({ color, valpha = 1 }: any) => {
  const rgbString = color.map(Math.ceil).join(',')
  return `rgba(${rgbString},${valpha})`
}

export const dimColor = (_color: string, amount = 0.36) => {
  const color = Color(_color)
  return rgbColorParamToString(color.alpha(amount))
}

type CreateScaleTypeColorProps = {
  isDarkTheme: boolean
  color: Color
}

type CreateScaleTypeTypographyProps = {
  isDarkTheme: boolean
  textColor: Color
  textInverseColor: Color
}

const convertColorScaleTypeColor = ({
  isDarkTheme,
  color,
}: CreateScaleTypeColorProps): ColorScale => {
  return isDarkTheme
    ? {
        lightest: rgbColorParamToString(color.desaturate(0.08).lighten(0.68).rgb()),
        lighter: rgbColorParamToString(color.desaturate(0.08).lighten(0.44).rgb()),
        light: rgbColorParamToString(color.desaturate(0.08).lighten(0.26).rgb()),
        normal: rgbColorParamToString(color.desaturate(0.08).rgb()),
        dark: rgbColorParamToString(color.desaturate(0.08).darken(0.26).rgb()),
        darker: rgbColorParamToString(color.desaturate(0.08).darken(0.44).rgb()),
        darkest: rgbColorParamToString(color.desaturate(0.08).darken(0.57).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.6)),
      }
    : {
        lightest: rgbColorParamToString(color.lighten(0.68).rgb()),
        lighter: rgbColorParamToString(color.lighten(0.44).rgb()),
        light: rgbColorParamToString(color.lighten(0.26).rgb()),
        normal: rgbColorParamToString(color.rgb()),
        dark: rgbColorParamToString(color.darken(0.26).rgb()),
        darker: rgbColorParamToString(color.darken(0.44).rgb()),
        darkest: rgbColorParamToString(color.darken(0.57).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.6).rgb()),
      }
}

const convertColorScaleTypeTypography = ({
  isDarkTheme,
  textColor,
  textInverseColor,
}: CreateScaleTypeTypographyProps): TypographyScale => {
  return isDarkTheme
    ? {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65).rgb()),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65).rgb()),
      }
    : {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65)),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65).rgb()),
      }
}

const convertGreyScaleTypeColor = ({
  isDarkTheme,
  color,
}: CreateScaleTypeColorProps): ColorScale => {
  return isDarkTheme
    ? {
        lightest: rgbColorParamToString(color.darken(0.14).rgb()),
        lighter: rgbColorParamToString(color.darken(0.1).rgb()),
        light: rgbColorParamToString(color.darken(0.05).rgb()),
        normal: rgbColorParamToString(color.rgb()),
        dark: rgbColorParamToString(color.lighten(0.05).rgb()),
        darker: rgbColorParamToString(color.lighten(0.16).rgb()),
        darkest: rgbColorParamToString(color.lighten(0.35).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.4).rgb()),
      }
    : {
        lightest: rgbColorParamToString(color.lighten(0.14).rgb()),
        lighter: rgbColorParamToString(color.lighten(0.1).rgb()),
        light: rgbColorParamToString(color.lighten(0.05).rgb()),
        normal: rgbColorParamToString(color.rgb()),
        dark: rgbColorParamToString(color.darken(0.05).rgb()),
        darker: rgbColorParamToString(color.darken(0.16).rgb()),
        darkest: rgbColorParamToString(color.darken(0.35).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.4).rgb()),
      }
}

const convertGreyScaleTypeTypography = ({
  isDarkTheme,
  textColor,
  textInverseColor,
}: CreateScaleTypeTypographyProps): TypographyScale => {
  return isDarkTheme
    ? {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65).rgb()),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
      }
    : {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65).rgb()),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65).rgb()),
      }
}

const convertBorderScaleTypeColor = ({
  isDarkTheme,
  color,
}: CreateScaleTypeColorProps): ColorScale => {
  if (isDarkTheme) {
    color = color.lighten(0.6)
  } else {
    color = color.darken(0.4)
  }

  return isDarkTheme
    ? {
        lightest: rgbColorParamToString(color.darken(0.3).rgb()),
        lighter: rgbColorParamToString(color.darken(0.25).rgb()),
        light: rgbColorParamToString(color.darken(0.2).rgb()),
        normal: rgbColorParamToString(color.rgb()),
        dark: rgbColorParamToString(color.lighten(0.4).rgb()),
        darker: rgbColorParamToString(color.lighten(0.6).rgb()),
        darkest: rgbColorParamToString(color.lighten(0.8).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.01).rgb()),
      }
    : {
        lightest: rgbColorParamToString(color.alpha(0.12).rgb()),
        lighter: rgbColorParamToString(color.alpha(0.24).rgb()),
        light: rgbColorParamToString(color.alpha(0.48).rgb()),
        normal: rgbColorParamToString(color.alpha(0.5).rgb()),
        dark: rgbColorParamToString(color.alpha(0.52).rgb()),
        darker: rgbColorParamToString(color.alpha(0.76).rgb()),
        darkest: rgbColorParamToString(color.alpha(1).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.01).rgb()),
      }
}

const convertBorderScaleTypeTypography = ({
  isDarkTheme,
  textColor,
  textInverseColor,
}: CreateScaleTypeTypographyProps): TypographyScale => {
  return isDarkTheme
    ? {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65).rgb()),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65).rgb()),
      }
    : {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65).rgb()),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65).rgb()),
      }
}

const convertBackgroundScaleTypeColor = ({
  isDarkTheme,
  color,
}: CreateScaleTypeColorProps): ColorScale => {
  return isDarkTheme
    ? {
        lightest: rgbColorParamToString(color.darken(0.14).rgb()),
        lighter: rgbColorParamToString(color.darken(0.1).rgb()),
        light: rgbColorParamToString(color.darken(0.05).rgb()),
        normal: rgbColorParamToString(color.rgb()),
        dark: rgbColorParamToString(color.lighten(0.05).rgb()),
        darker: rgbColorParamToString(color.lighten(0.16).rgb()),
        darkest: rgbColorParamToString(color.lighten(0.35).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.4).rgb()),
      }
    : {
        lightest: rgbColorParamToString(color.lighten(0.14).rgb()),
        lighter: rgbColorParamToString(color.lighten(0.1).rgb()),
        light: rgbColorParamToString(color.lighten(0.05).rgb()),
        normal: rgbColorParamToString(color.rgb()),
        dark: rgbColorParamToString(color.darken(0.05).rgb()),
        darker: rgbColorParamToString(color.darken(0.16).rgb()),
        darkest: rgbColorParamToString(color.darken(0.35).rgb()),
        dimmed: rgbColorParamToString(color.alpha(0.4).rgb()),
      }
}

const convertBackgroundScaleTypeTypography = ({
  isDarkTheme,
  textColor,
  textInverseColor,
}: CreateScaleTypeTypographyProps): TypographyScale => {
  return isDarkTheme
    ? {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65)),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65).rgb()),
      }
    : {
        text: rgbColorParamToString(textColor.rgb()),
        textDimmed: rgbColorParamToString(textColor.alpha(0.65)),
        textInverse: rgbColorParamToString(textInverseColor.rgb()),
        textInverseDimmed: rgbColorParamToString(textInverseColor.alpha(0.65).rgb()),
      }
}

type CreateColorScaleProps = {
  color: string
  themeType: ThemeType
  wcag: ThemeWCAGRatingType
  scaleType?: 'color' | 'border' | 'grey' | 'background'
  text?: { color?: string; inverseColor?: string }
}

export const createColorScale = ({
  color: _color,
  themeType,
  wcag,
  scaleType = 'color',
  text = {},
}: CreateColorScaleProps) => {
  const color = Color(_color)
  let contrastColor = getContrastColor({ color: _color, wcag })
  let textColor = Color(contrastColor)
  let textInverseColor = Color(getContrastColor({ color: contrastColor, wcag }))

  let colorScale: ColorScale | null = null
  let typographyScale: TypographyScale | null = null

  const isDarkTheme = themeType === 'dark'

  switch (scaleType) {
    case 'color':
      colorScale = convertColorScaleTypeColor({ isDarkTheme, color })
      typographyScale = convertColorScaleTypeTypography({
        isDarkTheme,
        textColor,
        textInverseColor,
      })
      break
    case 'grey':
      colorScale = convertGreyScaleTypeColor({ isDarkTheme, color })
      typographyScale = convertGreyScaleTypeTypography({
        isDarkTheme,
        textColor,
        textInverseColor,
      })
      break
    case 'border':
      colorScale = convertBorderScaleTypeColor({ isDarkTheme, color })
      typographyScale = convertBorderScaleTypeTypography({
        isDarkTheme,
        textColor,
        textInverseColor,
      })
      break
    case 'background':
      if (text.color) {
        contrastColor = text.color
      }

      textColor = Color(contrastColor)

      if (text.inverseColor) {
        textInverseColor = Color(text.inverseColor)
      }

      colorScale = convertBackgroundScaleTypeColor({ isDarkTheme, color })
      typographyScale = convertBackgroundScaleTypeTypography({
        isDarkTheme,
        textColor,
        textInverseColor,
      })
      break
    default:
      break
  }
  return colorScale && typographyScale ? { ...colorScale, ...typographyScale } : null
}
