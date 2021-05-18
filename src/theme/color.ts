import Color from 'color';
import { getContrastColor } from './get-contrast-color';

import type {
  ThemeColorScale,
  ThemeType,
  ThemeTypographyScale,
  ThemeWCAGRatingType,
} from './types';

const wcagThresholdMap: Record<ThemeWCAGRatingType, number> = {
  AA: 149,
  AAA: 77,
};

export const rgbColorParamToString = ({ color, valpha = 1 }: any) => {
  const rgbString = color.map(Math.ceil).join(',');
  return `rgba(${rgbString},${valpha})`;
};

export const dimColor = (_color: string, amount: number = 0.36) => {
  const color = Color(_color);
  return rgbColorParamToString(color.alpha(amount));
};

type CreateColorScaleProps = {
  color: string;
  themeType: ThemeType;
  wcag: ThemeWCAGRatingType;
  scaleType?: 'color' | 'border' | 'grey' | 'background';
  text?: { color?: string; inverseColor?: string };
};

export const createColorScale = ({
  color: _color,
  themeType,
  wcag,
  scaleType = 'color',
  text = {},
}: CreateColorScaleProps) => {
  const color = Color(_color);
  let contrastColor = getContrastColor({ color: _color, wcag });
  let textColor = Color(contrastColor);
  let textInverseColor = Color(getContrastColor({ color: contrastColor, wcag }));

  let colorScale: ThemeColorScale | null = null;
  let typographyScale: ThemeTypographyScale | null = null;

  const isDarkTheme = themeType === 'dark';

  switch (scaleType) {
    case 'color':
      colorScale = isDarkTheme
        ? {
            lightest: rgbColorParamToString(color.desaturate(0.2).lighten(0.42).rgb()),
            lighter: rgbColorParamToString(color.desaturate(0.2).lighten(0.28).rgb()),
            light: rgbColorParamToString(color.desaturate(0.2).lighten(0.14).rgb()),
            normal: rgbColorParamToString(color.desaturate(0.2).rgb()),
            dark: rgbColorParamToString(color.desaturate(0.2).darken(0.14).rgb()),
            darker: rgbColorParamToString(color.desaturate(0.2).darken(0.28).rgb()),
            darkest: rgbColorParamToString(color.desaturate(0.2).darken(0.42).rgb()),
            dimmed: rgbColorParamToString(color.alpha(0.36)),
            muted: rgbColorParamToString(color.alpha(0.18)),
          }
        : {
            lightest: rgbColorParamToString(color.lighten(0.42).rgb()),
            lighter: rgbColorParamToString(color.lighten(0.28).rgb()),
            light: rgbColorParamToString(color.lighten(0.14).rgb()),
            normal: rgbColorParamToString(color.rgb()),
            dark: rgbColorParamToString(color.darken(0.14).rgb()),
            darker: rgbColorParamToString(color.darken(0.28).rgb()),
            darkest: rgbColorParamToString(color.darken(0.42).rgb()),
            dimmed: rgbColorParamToString(color.alpha(0.36)),
            muted: rgbColorParamToString(color.alpha(0.18)),
          };

      typographyScale = isDarkTheme
        ? {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          }
        : {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          };
      break;
    case 'grey':
      colorScale = isDarkTheme
        ? {
            lightest: rgbColorParamToString(color.darken(0.14).rgb()),
            lighter: rgbColorParamToString(color.darken(0.1).rgb()),
            light: rgbColorParamToString(color.darken(0.05).rgb()),
            normal: rgbColorParamToString(color.rgb()),
            dark: rgbColorParamToString(color.lighten(0.05).rgb()),
            darker: rgbColorParamToString(color.lighten(0.16).rgb()),
            darkest: rgbColorParamToString(color.lighten(0.35).rgb()),
            dimmed: rgbColorParamToString(color.alpha(0.4)),
            muted: rgbColorParamToString(color.alpha(0.2)),
          }
        : {
            lightest: rgbColorParamToString(color.lighten(0.14).rgb()),
            lighter: rgbColorParamToString(color.lighten(0.1).rgb()),
            light: rgbColorParamToString(color.lighten(0.05).rgb()),
            normal: rgbColorParamToString(color.rgb()),
            dark: rgbColorParamToString(color.darken(0.05).rgb()),
            darker: rgbColorParamToString(color.darken(0.16).rgb()),
            darkest: rgbColorParamToString(color.darken(0.35).rgb()),
            dimmed: rgbColorParamToString(color.alpha(0.4)),
            muted: rgbColorParamToString(color.alpha(0.2)),
          };

      typographyScale = isDarkTheme
        ? {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          }
        : {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          };
      break;
    case 'border':
      colorScale = isDarkTheme
        ? {
            lightest: rgbColorParamToString(color.darken(0.14).alpha(0.4)),
            lighter: rgbColorParamToString(color.darken(0.1).alpha(0.4)),
            light: rgbColorParamToString(color.darken(0.05).alpha(0.4)),
            normal: rgbColorParamToString(color.alpha(0.4)),
            dark: rgbColorParamToString(color.lighten(0.05).alpha(0.4)),
            darker: rgbColorParamToString(color.lighten(0.16).alpha(0.4)),
            darkest: rgbColorParamToString(color.lighten(0.35).alpha(0.4)),
            dimmed: rgbColorParamToString(color.alpha(0.2)),
            muted: rgbColorParamToString(color.alpha(0.1)),
          }
        : {
            lightest: rgbColorParamToString(color.lighten(0.14).rgb()),
            lighter: rgbColorParamToString(color.lighten(0.1).rgb()),
            light: rgbColorParamToString(color.lighten(0.05).rgb()),
            normal: rgbColorParamToString(color.rgb()),
            dark: rgbColorParamToString(color.darken(0.05).rgb()),
            darker: rgbColorParamToString(color.darken(0.16).rgb()),
            darkest: rgbColorParamToString(color.darken(0.35).rgb()),
            dimmed: rgbColorParamToString(color.alpha(0.4)),
            muted: rgbColorParamToString(color.alpha(0.2)),
          };

      typographyScale = isDarkTheme
        ? {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          }
        : {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          };
      break;
    case 'background':
      if (text.color) {
        contrastColor = text.color;
      }

      textColor = Color(contrastColor);

      if (text.inverseColor) {
        textInverseColor = Color(text.inverseColor);
      }

      colorScale = isDarkTheme
        ? {
            lightest: rgbColorParamToString(color.darken(0.14).rgb()),
            lighter: rgbColorParamToString(color.darken(0.1).rgb()),
            light: rgbColorParamToString(color.darken(0.05).rgb()),
            normal: rgbColorParamToString(color.rgb()),
            dark: rgbColorParamToString(color.lighten(0.05).rgb()),
            darker: rgbColorParamToString(color.lighten(0.16).rgb()),
            darkest: rgbColorParamToString(color.lighten(0.35).rgb()),
            dimmed: rgbColorParamToString(color.alpha(0.4)),
            muted: rgbColorParamToString(color.alpha(0.2)),
          }
        : {
            lightest: rgbColorParamToString(color.lighten(0.14).rgb()),
            lighter: rgbColorParamToString(color.lighten(0.1).rgb()),
            light: rgbColorParamToString(color.lighten(0.05).rgb()),
            normal: rgbColorParamToString(color.rgb()),
            dark: rgbColorParamToString(color.darken(0.05).rgb()),
            darker: rgbColorParamToString(color.darken(0.16).rgb()),
            darkest: rgbColorParamToString(color.darken(0.35).rgb()),
            dimmed: rgbColorParamToString(color.alpha(0.4)),
            muted: rgbColorParamToString(color.alpha(0.2)),
          };

      typographyScale = isDarkTheme
        ? {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          }
        : {
            textColor: rgbColorParamToString(textColor.rgb()),
            textColorDimmed: rgbColorParamToString(textColor.alpha(0.65)),
            textColorMuted: rgbColorParamToString(textColor.alpha(0.32)),
            textInverseColor: rgbColorParamToString(textInverseColor.rgb()),
            textInverseColorDimmed: rgbColorParamToString(textInverseColor.alpha(0.65)),
            textInverseColorMuted: rgbColorParamToString(textInverseColor.alpha(0.32)),
          };
      break;
    default:
      break;
  }
  return colorScale && typographyScale ? { ...colorScale, ...typographyScale } : null;
};
