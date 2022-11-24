import { createTheme, ThemeOptions } from '@mui/material/styles'

import { ExtendedTypographyOptions } from './typographyClasses'

export const theme = createTheme({
  breakpoints: {
    values: {
      /**
       * 0 - 599: mobile
       * 600 - 959: tablet portrait
       * 960 - 1279: tablet landscape and laptop
       * 1280 - up: desktop
       */
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1440,
      xs: 0
    }
  },
  typography: {
    display: {
      '@media (min-width: 1280px)': {
        fontSize: '54px'
      },
      color: '#231F20',
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '120%',
      transition: 'font-size 200ms ease-in'
    },
    fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
    hero: {
      color: '#231F20',
      fontSize: '80px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    lgBold: {
      color: '#231F20',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '150%'
    },
    lgLight: {
      '@media (min-width: 1280px)': {
        fontSize: '24px'
      },
      color: '#231F20',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '150%',
      transition: 'font-size 200ms ease-in'
    },
    mdBold: {
      color: '#231F20',
      fontSize: '15px',
      fontWeight: 600,
      lineHeight: '140%'
    },
    mdLight: {
      color: '#231F20',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '140%'
    },
    menu: {
      color: '#777877',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '140%'
    },
    smBold: {
      color: '#231F20',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    smLight: {
      color: '#231F20',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '120%',
      textTransform: 'none'
    },
    xl: {
      color: '#231F20',
      fontSize: '54px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    xsBold: {
      color: '#231F20',
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: '120%'
    },
    xsLight: {
      color: '#231F20',
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '120%'
    }
  } as ExtendedTypographyOptions
} as ThemeOptions)
