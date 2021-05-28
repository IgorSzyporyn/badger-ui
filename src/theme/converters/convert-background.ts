import { createColorScale } from './color'

import type { Theme, ThemeBackground, ThemeConfig } from '../types'

type BackgroundConverterProps = {
  theme: Theme
  config: ThemeConfig<unknown>
}

export function convertBackground({
  config: { background, type, wcag },
  theme,
}: BackgroundConverterProps): ThemeBackground {
  const bodyColorScale = createColorScale({
    color: background.body,
    themeType: type,
    wcag,
    scaleType: 'background',
  })

  const surfaceColorScale = createColorScale({
    color: background.surface,
    themeType: type,
    wcag,
    scaleType: 'background',
  })

  return {
    body: { ...theme.background.body, ...bodyColorScale },
    surface: { ...theme.background.surface, ...surfaceColorScale },
  }
}
