import { CSSProperties } from 'react'
import { css } from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import type { Theme, ThemeTypography } from './types'

type TypographyMap = Record<
  keyof Omit<
    ThemeTypography,
    | 'fontSize'
    | 'fontFamily'
    | 'textColor'
    | 'textInverseColor'
    | 'textColorDimmed'
    | 'textColorMuted'
    | 'textInverseColorDimmed'
    | 'textInverseColorMuted'
  >,
  keyof HTMLElementTagNameMap | null
>

const typographyMap: TypographyMap = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  subtitle1: null,
  subtitle2: null,
  body1: 'p',
  body2: null,
  caption: 'caption',
  button: 'button',
  overline: null,
}

export const createTypographyGlobals = (theme: Theme) => {
  return css`
    html {
      font-size: 16px;
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.typography.fontFamily};
      font-size: ${theme.typography.fontSize * 0.1}rem;
      font-variant-ligatures: none;
      line-height: ${theme.typography.body1.lineHeight};
      letter-spacing: ${theme.typography.body1.letterSpacing};
      text-decoration-skip-ink: auto;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;

      background-color: ${theme.background.body.normal};
      color: ${theme.typography.textColor};
    }

    ${Object.keys(typographyMap).map((_key) => {
      const typographyKey = _key as keyof typeof typographyMap
      const isTagMapped = typographyMap[typographyKey] !== null
      const themeItem = theme.typography[typographyKey]

      return isTagMapped
        ? css`
            ${typographyMap[typographyKey]} {
              ${Object.keys(themeItem).map((_rule) => {
                const rule = _rule as keyof CSSProperties
                return css`
                  ${kebabCase(rule)}: ${themeItem[rule]};
                `
              })}// Create the tag rules
            }
          `
        : null
    })}
  `
}
