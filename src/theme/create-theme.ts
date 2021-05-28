import merge from 'deepmerge'
import { convertBackground } from './converters/convert-background'
import { convertColor } from './converters/convert-color'
import { convertElevations } from './converters/convert-elevations'
import { convertMetrics } from './converters/convert-metrics'
import { convertSize } from './converters/convert-size'
import { convertTypography } from './converters/convert-typography'
import { dummyTheme, defaultThemeOptions } from './options'

import type { Theme, ThemeOptions, ThemeConfig, ThemeNamedOptions } from './types'

export function createTheme<T = ThemeNamedOptions>(
  { type = 'light', ...options }: ThemeOptions<T>,
  customThemeValues: Record<string, any> = {}
) {
  const config: ThemeConfig<T> = merge({ ...defaultThemeOptions[type] }, options)
  const theme = { ...dummyTheme, type, wcag: config.wcag }

  theme.color = convertColor<T>(config)
  theme.background = convertBackground({ theme, config })
  theme.metrics = convertMetrics(config)
  theme.typography = convertTypography({ config, background: theme.background })
  theme.size = convertSize(config)
  theme.elevations = convertElevations(config)

  return merge(theme, customThemeValues) as Theme<T>
}

export const defaultTheme = createTheme(defaultThemeOptions.light)
