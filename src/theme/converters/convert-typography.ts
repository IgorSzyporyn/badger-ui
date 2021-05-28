import { dimColor } from './color'
import { getContrastColor } from '../get-contrast-color'

import type { ThemeBackground, ThemeConfig } from '../types'

type TypographyConverterProps = {
  background: ThemeBackground
  config: ThemeConfig<unknown>
}

export function convertTypography({
  background,
  config: { typography, wcag, type },
}: TypographyConverterProps) {
  const {
    fontFamily,
    fontSize,
    textColor,
    textColorDimmed,
    textInverseColor,
    textInverseColorDimmed,
    ...typographyComponentsCSSProperties
  } = typography

  return {
    fontFamily,
    fontSize: `${fontSize}px`,
    textColor: textColor
      ? textColor
      : getContrastColor({
          color: background.surface.normal,
          wcag,
          primary: type,
        }),
    textColorDimmed: dimColor(
      textColorDimmed
        ? textColorDimmed
        : getContrastColor({
            color: background.surface.normal,
            wcag,
            primary: type,
          })
    ),
    textInverseColor: textInverseColor
      ? textInverseColor
      : getContrastColor({
          color: getContrastColor({
            color: background.surface.normal,
            wcag,
            primary: type,
          }),
          wcag,
        }),
    textInverseColorDimmed: dimColor(
      textInverseColorDimmed
        ? textInverseColorDimmed
        : getContrastColor({
            color: getContrastColor({
              color: background.surface.normal,
              wcag,
              primary: type,
            }),
            wcag,
          })
    ),
    ...typographyComponentsCSSProperties,
  }
}
