import type {
  Theme,
  ThemeColorConfig,
  ThemeConfig,
  ThemeType,
  ThemeTypographyConfig,
} from './types'

const color: ThemeColorConfig = {
  primary: '#0247fe',
  secondary: '#a9378f',
  success: '#0b9c06',
  error: '#fe2712',
  call2action: '#fd5307',
  grey: '#d0d6d6',
  border: '',
}

const typography: ThemeTypographyConfig = {
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontSize: 14,
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
}

// Default Theme Options is in fact a safeguard for a solid theme config
// and has that type to ensure all properties are set
export type DefaultThemeOptions<T = Record<string, never>> = Record<
  ThemeType,
  ThemeConfig<T>
>

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
      body: '#333333',
      surface: '#424242',
    },
    gutter: 8,
    typography: {
      ...typography,
      textColor: 'rgba(255,255,255,0.82)',
      textInverseColor: '#304857',
    },
    named: {},
  },
}

export const dummyTheme: Theme<Record<string, never>> = {
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
      text: '',
      textDimmed: '',
      textInverse: '',
      textInverseDimmed: '',
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
  typography: {
    fontFamily: '',
    fontSize: 0,
    textColor: '',
    textColorDimmed: '',
    textInverseColor: '',
    textInverseColorDimmed: '',
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
}
