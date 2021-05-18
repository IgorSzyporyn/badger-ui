import merge from 'deepmerge';
import { createColorScale, dimColor } from './color';
import { getContrastColor } from './get-contrast-color';

import { dummyTheme, defaultThemeOptions } from './options';

import type { Theme, ThemeOptions, ThemeColorType, ThemeColorScale, ThemeConfig } from './types';

export function createTheme<T = Record<string, string>>(
  { type = 'light', ...options }: ThemeOptions<T>,
  customThemeValues: Record<string, any> = {}
) {
  const config: ThemeConfig<T> = merge({ ...defaultThemeOptions }, options);
  const theme = { ...dummyTheme, type, wcag: config.wcag };
  const themeType = config.type;
  const wcag = config.wcag;

  // Handletyped colors
  Object.keys(config.color).forEach((key) => {
    const colorType = key as ThemeColorType;
    let scaleType: 'color' | 'border' | 'grey' = 'color';

    switch (colorType) {
      case 'border':
        scaleType = 'border';
        break;
      case 'grey':
        scaleType = 'grey';
        break;
      default:
        break;
    }
    const colorScale = createColorScale({
      color: config.color[colorType],
      themeType: type,
      scaleType,
      wcag,
    });

    if (colorScale) {
      theme.color[colorType] = colorScale;
    }
  });

  const bodyColorScale = createColorScale({
    color: config.background.body,
    themeType,
    wcag,
    scaleType: 'background',
  });
  const surfaceColorScale = createColorScale({
    color: config.background.surface,
    themeType,
    wcag,
    scaleType: 'background',
  });

  // Handle background colors
  theme.background = {
    body: { ...theme.background.body, ...bodyColorScale },
    surface: { ...theme.background.surface, ...surfaceColorScale },
  };

  // Handle named colors
  Object.keys(config.named).forEach((key: unknown) => {
    const namedKey = key as string;
    const _named = config.named as unknown;
    const named = _named as Record<string, string>;
    const color = named[namedKey];

    const colorScale = createColorScale({
      color,
      themeType: type,
      scaleType: 'color',
      wcag,
    });

    const _themeNamed = theme.named as unknown;
    const themeNamed = _themeNamed as Record<string, ThemeColorScale>;

    if (colorScale) {
      themeNamed[namedKey] = colorScale;
    }
  });

  // Handle metrics
  theme.metrics = {
    gutter: `${config.gutter}px`,
    gutterCollapsed: `${Math.round(config.gutter * 0.75)}px`, // 6px @ 8px gutter
    gutterExpanded: `${Math.round(config.gutter * 1.5)}px`, // 12px @ 8px gutter
    spacing: `${Math.round(config.gutter * 2)}px`, // 16px @ 8px gutter
    spacingCollapsed: `${Math.round(config.gutter * 2 * 0.75)}px`, // 12px @ 8px gutter
    spacingExpanded: `${Math.round(config.gutter * 2 * 1.5)}px`, // 24px @ 8px gutter
    borderRadius: `${Math.round(config.gutter * 0.75)}px`, // 6px @ 8px gutter
  };

  const { typography } = config;
  const {
    fontFamily,
    fontSize,
    textColor,
    textColorDimmed,
    textColorMuted,
    textInverseColor,
    textInverseColorDimmed,
    textInverseColorMuted,
    ...typographyComponentsCSSProperties
  } = typography;

  theme.typography = {
    fontFamily,
    fontSize: `${fontSize}px`,
    textColor: textColor
      ? textColor
      : getContrastColor({
          color: theme.background.surface.normal,
          wcag,
          primary: type,
        }),
    textColorDimmed: dimColor(
      textColorDimmed
        ? textColorDimmed
        : getContrastColor({
            color: theme.background.surface.normal,
            wcag,
            primary: type,
          })
    ),
    textColorMuted: dimColor(
      textColorMuted
        ? textColorMuted
        : getContrastColor({
            color: theme.background.surface.normal,
            wcag,
            primary: type,
          }),
      0.18
    ),
    textInverseColor: textInverseColor
      ? textInverseColor
      : getContrastColor({
          color: getContrastColor({
            color: theme.background.surface.normal,
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
              color: theme.background.surface.normal,
              wcag,
              primary: type,
            }),
            wcag,
          })
    ),
    textInverseColorMuted: dimColor(
      textInverseColorMuted
        ? textInverseColorMuted
        : getContrastColor({
            color: getContrastColor({
              color: theme.background.surface.normal,
              wcag,
            }),
            wcag,
          }),
      0.18
    ),
    ...typographyComponentsCSSProperties,
  };

  // Handle sizes borrowing fontSize as base value
  theme.size = {
    font: {
      small: fontSize,
      medium: Math.round(fontSize * 1.1667),
      normal: Math.round(fontSize * 1.1667),
      large: Math.round(fontSize * 1.5),
      xlarge: Math.round(fontSize * 1.8333),
    },
    icon: {
      small: Math.round(fontSize * 1.3333),
      medium: Math.round(fontSize * 1.5),
      normal: Math.round(fontSize * 1.6667),
      large: Math.round(fontSize * 2),
      xlarge: Math.round(fontSize * 2.6667),
    },
    padding: {
      small: Math.round(fontSize * 0.3333),
      medium: Math.round(fontSize * 0.5),
      normal: Math.round(fontSize * 0.6667),
      large: Math.round(fontSize * 0.8333),
      xlarge: Math.round(fontSize * 1.1667),
    },
  };

  if (type === 'light') {
    theme.elevations = [
      'none',
      '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
      '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    ];
  } else {
    theme.elevations = [
      'none',
      '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
      '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    ];
  }

  return merge(theme, customThemeValues) as Theme<T>;
}

export const defaultTheme = createTheme(defaultThemeOptions);
