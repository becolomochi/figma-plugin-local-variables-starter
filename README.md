# Figma Plugin Local Variables Starter

A Figma plugin starter kit that helps you create local variables from predefined design tokens. This plugin automatically generates color, spacing, typography, and radius variables in your Figma file.

## Features

- 🎨 Color variables with RGB values
- 📏 Spacing system (including negative values)
- 📝 Typography settings (size, weight, line height)
- 🔄 Border radius presets

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Build the plugin:

```bash
npm run build
```

## Usage

1. In Figma, go to Plugins > Development > Import plugin from manifest
2. Select the `manifest.json` file from this project
3. Run the plugin in Figma
4. Click "Create Local Variables" button
5. The plugin will create a new variable collection called "Design Tokens"

## Design Tokens Structure

The plugin creates variables based on the following structure:

- Colors: Primitive colors (blue, green, red, yellow, orange) with 12 shades each
- Spacing: Regular and negative spacing values from px to 6xl
- Typography: Font sizes, weights, and line heights
- Radius: Border radius presets from none to full

## Development

For development mode with auto-reloading:
```bash
npm run watch
```

## License

MIT License - see LICENSE file for details.

## Reference Code
The main implementation can be found in:

```169:212:src/code.ts
async function initializeVariables() {
  const collection = await createVariableCollection('Design Tokens');

  // Colors
  for (const [colorName, colorGroup] of Object.entries(tokens.colors.primitive)) {
    for (const [shade, value] of Object.entries(colorGroup as Record<string, { r: number; g: number; b: number }>)) {
      const variableName = `color/${colorName}/${shade}`;
      await createVariable(collection, variableName, 'COLOR', {
        r: value.r,
        g: value.g,
        b: value.b
      });
    }
  }

  // Spacing
  for (const [key, value] of Object.entries(tokens.spacing)) {
    if (key !== 'negative' && typeof value === 'number') {
      await createVariable(collection, `spacing/${key}`, 'FLOAT', value);
    }
  }

  // Negative spacingを別途処理
  for (const [key, value] of Object.entries(tokens.spacing.negative)) {
    await createVariable(collection, `spacing/negative/${key}`, 'FLOAT', value);
  }

  // Typography
  for (const [category, values] of Object.entries(tokens.typography)) {
    for (const [key, value] of Object.entries(values)) {
      await createVariable(
        collection,
        `typography/${category}/${key}`,
        'FLOAT',
        typeof value === 'string' ? parseFloat(value) : value,
      );
    }
  }

  // Radius
  for (const [key, value] of Object.entries(tokens.radius)) {
    await createVariable(collection, `radius/${key}`, 'FLOAT', value);
  }
}
```


The design tokens structure is defined in:

```1:104:src/types.d.ts
declare interface Color {
  r: number;
  g: number;
  b: number;
}

declare interface ColorShades {
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

declare interface PrimitiveColors {
  blue: ColorShades;
  green: ColorShades;
  red: ColorShades;
  yellow: ColorShades;
  orange: ColorShades;
}

declare interface Colors {
  primitive: PrimitiveColors;
}

declare interface Spacing {
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

declare interface Typography {
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
declare interface Radius {
  none: number;
  sm: number;
  base: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

declare interface DesignTokens {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  radius: Radius;
}
```
