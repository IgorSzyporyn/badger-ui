import { createTheme } from './theme/create-theme';

createTheme({
  color: {
    primary: '#ff0000',
  },
});

createTheme({
  color: {
    primary: '#ff0000',
    secondary: '#00ff00',
    call2action: '#0000ff',
  },
});

createTheme({
  color: {
    primary: '#ff0000',
    secondary: '#00ff00',
    call2action: '#0000ff',
  },
  background: {
    body: '#000000',
    surface: '#ffffff',
  },
});

createTheme({
  type: 'dark',
  color: {
    primary: '#ff000f',
    secondary: '#00ff0f',
    call2action: '#000fff',
  },
  background: {
    body: '#000000',
    surface: '#0a0a0a',
  },
});

createTheme({
  type: 'dark',
  color: {
    primary: '#ff000f',
    secondary: '#00ff0f',
    call2action: '#000fff',
  },
  background: {
    body: '#000000',
    surface: '#0a0a0a',
  },
  named: {
    vipOnly: '#0f0f0f',
    someOther: '#f0f0f0',
  },
});

createTheme(
  {
    type: 'dark',
    color: {
      primary: '#ff000f',
      secondary: '#00ff0f',
      call2action: '#000fff',
    },
    background: {
      body: '#000000',
      surface: '#0a0a0a',
    },
    named: {
      vipOnly: '#0f0f0f',
      someOther: '#f0f0f0',
    },
  },
  {
    color: {
      primary: { textColor: '#ffffff' },
    },
    typography: {
      heading1: { marginBottom: '20px' },
    },
  }
);
