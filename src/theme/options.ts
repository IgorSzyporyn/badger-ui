import type {
  Theme,
  ThemeColorConfig,
  ThemeConfig,
  ThemeType,
  ThemeTypographyConfig,
} from './types';

const color: ThemeColorConfig = {
  primary: '#0247fe',
  secondary: '#a9378f',
  success: '#0b9c06',
  error: '#fe2712',
  call2action: '#fd5307',
  grey: '#d0d6d6',
  border: '#d0d6d6',
};

const typography: ThemeTypographyConfig = {
  fontFamily: 'Roboto',
  fontSize: 12,
  heading1: {
    fontSize: '6rem',
    fontWeight: 300,
    lineHeight: 1.167,
    letterSpacing: '-0.01562em',
  },
  heading2: {
    fontSize: '3.75rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  heading3: {
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: '0em',
  },
  heading4: {
    fontSize: '2.125rem',
    fontWeight: 400,
    lineHeight: 1.235,
    letterSpacing: '0.00735em',
  },
  heading5: {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
  },
  heading6: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
};

// Default Theme Options is in fact a safeguard for a solid theme config
// and has that type to ensure all properties are set
export type DefaultThemeOptions<T = {}> = Record<ThemeType, ThemeConfig<T>>;

export const defaultThemeOptions: DefaultThemeOptions = {
  light: {
    type: 'light',
    wcag: 'AA',
    color,
    background: {
      surface: '#ffffff',
      body: '#ffffff',
    },
    gutter: 8,
    typography,
    named: {},
  },
  dark: {
    type: 'dark',
    wcag: 'AA',
    color,
    background: {
      body: '#1c1c1f',
      surface: '#252529',
    },
    gutter: 8,
    typography: {
      ...typography,
      textColor: 'rgba(255,255,255,255.82)',
      textInverseColor: '#304857',
    },
    named: {},
  },
};

export const dummyTheme: Theme<{}> = {
  wcag: 'AA',
  type: 'light',
  color: {
    primary: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
    secondary: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
    success: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
    error: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
    call2action: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
    grey: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
    border: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
  },
  background: {
    surface: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
    body: {
      lightest: '',
      lighter: '',
      light: '',
      normal: '',
      dark: '',
      darker: '',
      darkest: '',
      dimmed: '',
      muted: '',
      textColor: '',
      textColorDimmed: '',
      textColorMuted: '',
      textInverseColor: '',
      textInverseColorDimmed: '',
      textInverseColorMuted: '',
    },
  },
  metrics: {
    gutter: '',
    gutterExpanded: '',
    gutterCollapsed: '',
    spacing: '',
    spacingExpanded: '',
    spacingCollapsed: '',
    borderRadius: '',
  },
  size: {
    font: {
      small: 0,
      medium: 0,
      normal: 0,
      large: 0,
      xlarge: 0,
    },
    icon: {
      small: 0,
      medium: 0,
      normal: 0,
      large: 0,
      xlarge: 0,
    },
    padding: {
      small: 0,
      medium: 0,
      normal: 0,
      large: 0,
      xlarge: 0,
    },
  },
  typography: {
    fontFamily: '',
    fontSize: '',
    textColor: '',
    textColorDimmed: '',
    textColorMuted: '',
    textInverseColor: '',
    textInverseColorDimmed: '',
    textInverseColorMuted: '',
    heading1: {},
    heading2: {},
    heading3: {},
    heading4: {},
    heading5: {},
    heading6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
  },
  elevations: [],
  named: {},
};
