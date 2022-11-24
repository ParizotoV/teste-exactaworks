import { TypographyOptions } from '@mui/material/styles/createTypography'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero: true
    display: true
    xl: true
    lgBold: true
    lgLight: true
    mdBold: true
    mdLight: true
    smBold: true
    smLight: true
    xsBold: true
    xsLight: true
    menu: true
    h1: false
    h2: false
    h3: false
    h4: false
    h5: false
    h6: false
    subtitle1: false
    subtitle2: false
    body1: false
    body2: false
    button: false
    caption: false
    inherit: false
  }
}

// Enable custom fonts in directory: "types/typographyClasses.d.ts"
export interface ExtendedTypographyOptions extends TypographyOptions {
  hero: React.CSSProperties
  display: React.CSSProperties
  xl: React.CSSProperties
  lgBold: React.CSSProperties
  lgLight: React.CSSProperties
  mdBold: React.CSSProperties
  mdLight: React.CSSProperties
  smBold: React.CSSProperties
  smLight: React.CSSProperties
  xsBold: React.CSSProperties
  xsLight: React.CSSProperties
  menu: React.CSSProperties
}
