const apptheme = {
  colors: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff',
      contrastText: '#fff',
      dark: '#1976d2',
      light: '#64b5f6',
      main: 'rgb(52,30,83)',
    },
    secondary: {
      contrastText: '#fff',
      dark: 'rgb(157, 0, 55.9)',
      light: 'rgb(231, 51, 115)',
      main: 'rgb(225, 0, 80)',
    },
    text: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    active: {
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: '0.08',
      selected: 'rgba(0, 0, 0, 0.14)',
    },
    background: {
      default: '#fafafa',
      white: '#fff',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    error: {
      contrastText: '#fff',
      dark: '#d32f2f',
      light: '#e57373',
      main: '#f44336',
    },
    type: 'light', // or dark
  },
  transitions: {
    // grab transitions from Collapse.js and include here globally
  },
  spacing: {
    unit: 8,
  },
  zIndex: {
    appBar: 1100,
    overlay: 1200,
    tabs: 1000,
    tooltip: 1500,
    modal: 1400,
  },
  shape: {
    borderRadius: 4,
  },
  shadows: ['none', '0px 1px 3px 0px'],
  breakpoints: {
    mobileS: 360,
    mobileM: 375,
    mobileL: 414,
    tablet: 768,
    netbook: 960,
    laptop: 1024,
    desktop: 1140,
  },
};

export default apptheme;
