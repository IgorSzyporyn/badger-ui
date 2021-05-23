import React, { CSSProperties } from 'react'

export type ThemeWCAGRatingType = 'AA' | 'AAA'

/**
 * THEME UTILITY "THEMECOLORSCALE" TYPE
 */
export type ThemeColorScale = {
  lightest: string
  lighter: string
  light: string
  normal: string
  dark: string
  darker: string
  darkest: string
  dimmed: string
  muted: string
}

export type ThemeTypographyScale = {
  textColor: string
  textColorDimmed: string
  textColorMuted: string
  textInverseColor: string
  textInverseColorDimmed: string
  textInverseColorMuted: string
}

export type ThemeColorScaleType = keyof ThemeColorScale

/**
 * ### [TS] Cylindo-UI Theme Color Keys
 * Keys used as identifiers for color types in the theme eg. theme.color[type]
 */
export type ThemeColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'call2action'
  | 'border'
  | 'grey'

export type ThemeColor = Record<ThemeColorType, ThemeColorScale & ThemeTypographyScale>

export type ThemeColorConfig = Record<ThemeColorType, string>
export type ThemeColorOptions = Partial<ThemeColorConfig>

// Used for "type" prop in UI components as to use either color.primary.normal or
// grey.normal etc..
export type ThemeContextType = ThemeColorType | 'border' | 'grey'

/**
 * THEME "BACKGROUND" PROPERTY TYPES
 */
export type ThemeBackground = {
  surface: ThemeColorScale & ThemeTypographyScale
  body: ThemeColorScale & ThemeTypographyScale
}

export type ThemeBackgroundOptions = {
  surface?: string
  body?: string
}

export type ThemeBackgroundConfig = {
  surface: string
  body: string
}

/**
 * THEME "METRICS" PROPERTY TYPES
 */
export type ThemeMetrics = {
  gutter: string
  gutterExpanded: string
  gutterCollapsed: string
  spacing: string
  spacingExpanded: string
  spacingCollapsed: string
  borderRadius: string
}

export interface ThemeAdorment {
  start?: React.ReactNode
  end?: React.ReactNode
}

export type ThemeAdormentType = keyof ThemeAdorment

export type ThemeVariant = 'flat' | 'outlined' | 'filled'

/**
 * THEME "TYPOGRAPHY" PROPERTY TYPES
 */

export type ThemeTypography = {
  fontSize: string
  fontFamily: string
  textColor: string
  textColorDimmed: string
  textColorMuted: string
  textInverseColor: string
  textInverseColorDimmed: string
  textInverseColorMuted: string
  heading1: CSSProperties
  heading2: CSSProperties
  heading3: CSSProperties
  heading4: CSSProperties
  heading5: CSSProperties
  heading6: CSSProperties
  subtitle1: CSSProperties
  subtitle2: CSSProperties
  body1: CSSProperties
  body2: CSSProperties
  button: CSSProperties
  caption: CSSProperties
  overline: CSSProperties
}

export type ThemeTypographyType = CSSProperties

export type ThemeTypographyOptions = {
  fontSize?: number
  fontFamily?: string
  textColor?: string
  textColorDimmed?: string
  textColorMuted?: string
  textInverseColor?: string
  textInverseColorDimmed?: string
  textInverseColorMuted?: string
  heading1?: CSSProperties
  heading2?: CSSProperties
  heading3?: CSSProperties
  heading4?: CSSProperties
  heading5?: CSSProperties
  heading6?: CSSProperties
  subtitle1?: CSSProperties
  subtitle2?: CSSProperties
  body1?: CSSProperties
  body2?: CSSProperties
  button?: CSSProperties
  caption?: CSSProperties
  overline?: CSSProperties
}

export type ThemeTypographyConfig = {
  fontSize: number
  fontFamily: string
  textColor?: string
  textColorDimmed?: string
  textColorMuted?: string
  textInverseColor?: string
  textInverseColorDimmed?: string
  textInverseColorMuted?: string
  heading1: CSSProperties
  heading2: CSSProperties
  heading3: CSSProperties
  heading4: CSSProperties
  heading5: CSSProperties
  heading6: CSSProperties
  subtitle1: CSSProperties
  subtitle2: CSSProperties
  body1: CSSProperties
  body2: CSSProperties
  button: CSSProperties
  caption: CSSProperties
  overline: CSSProperties
}

/**
 * THEME "ELEVATIONS" PROPERTY TYPES
 */
export type ThemeElevationType = 0 | 1 | 2 | 3 | 4 | 5

export type ThemeElevations = string[]

export type ThemeType = 'light' | 'dark'

/**
 * THEME "SIZE" PROPERTY TYPES
 */
export type ThemeSizeType = 'small' | 'medium' | 'normal' | 'large' | 'xlarge'

export type ThemeSizeMap = Record<ThemeSizeType, number>

export type ThemeSize = {
  icon: ThemeSizeMap
  font: ThemeSizeMap
  padding: ThemeSizeMap
}

export type ThemeNamedOptions = Record<string, string>

/**
 * THEME TYPES, OPTIONS AND CONFIG
 */
export interface Theme<T = Record<string, string>> {
  wcag: ThemeWCAGRatingType
  type: ThemeType
  color: ThemeColor & Record<keyof T, ThemeColorScale & ThemeTypographyScale>
  background: ThemeBackground
  metrics: ThemeMetrics
  typography: ThemeTypography
  elevations: ThemeElevations
  size: ThemeSize
}

export interface ThemeOptions<T = Record<string, string>> {
  wcag?: ThemeWCAGRatingType
  type?: ThemeType
  color?: ThemeColorOptions
  background?: ThemeBackgroundOptions
  gutter?: number
  typography?: ThemeTypographyOptions
  named?: T
}

export interface ThemeConfig<T = Record<string, string>> {
  wcag: ThemeWCAGRatingType
  type: ThemeType
  color: Record<ThemeColorType, string>
  background: ThemeBackgroundConfig
  gutter: number
  typography: ThemeTypographyConfig
  named: T
}
