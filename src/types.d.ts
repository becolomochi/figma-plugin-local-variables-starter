export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface ColorShades {
  1: Color;
  2: Color;
  3: Color;
  4: Color;
  5: Color;
  6: Color;
  7: Color;
  8: Color;
  9: Color;
  10: Color;
  11: Color;
  12: Color;
}

export interface PrimitiveColors {
  blue: ColorShades;
  green: ColorShades;
  red: ColorShades;
  yellow: ColorShades;
  orange: ColorShades;
}

export interface Colors {
  primitive: PrimitiveColors;
}

export interface Spacing {
  none: number;
  px: number;
  '4xs': number;
  '3xs': number;
  '2xs': number;
  xs: number;
  sm: number;
  md: number;
  base: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
  negative: {
    px: number;
    '4xs': number;
    '3xs': number;
    '2xs': number;
    xs: number;
    sm: number;
    md: number;
    base: number;
  };
}

export interface Typography {
  size: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
    '4xl': number;
    '5xl': number;
    '6xl': number;
  };
  weight: {
    normal: number;
    bold: number;
  };
  lineHeight: {
    none: string;
    tight: string;
    normal: string;
    relaxed: string;
    loose: string;
  };
}

export interface Radius {
  none: number;
  sm: number;
  base: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

export interface DesignTokens {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  radius: Radius;
}
