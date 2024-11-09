import { DesignTokens } from "./types";

// Figma Plugin APIの初期化
figma.showUI(__html__, { width: 320, height: 480 });

// デザイントークンの定義
const tokens: DesignTokens = {
  colors: {
    primitive: {
      blue: {
        1: { r: 0.94, g: 0.97, b: 1.00 }, // #f0f7ff
        2: { r: 0.88, g: 0.94, b: 1.00 }, // #e1f0ff
        3: { r: 0.82, g: 0.91, b: 1.00 }, // #d1e8ff
        4: { r: 0.71, g: 0.85, b: 1.00 }, // #b5d9ff
        5: { r: 0.55, g: 0.77, b: 0.99 }, // #8dc4fc
        6: { r: 0.39, g: 0.69, b: 0.99 }, // #63b0fc
        7: { r: 0.24, g: 0.59, b: 0.99 }, // #3d96fc
        8: { r: 0.08, g: 0.49, b: 0.98 }, // #147dfa
        9: { r: 0.04, g: 0.41, b: 0.87 }, // #0a68dd
        10: { r: 0.03, g: 0.33, b: 0.73 }, // #0854ba
        11: { r: 0.02, g: 0.25, b: 0.58 }, // #054094
        12: { r: 0.01, g: 0.17, b: 0.43 }, // #032b6e
      },
      green: {
        1: { r: 0.94, g: 0.99, b: 0.95 }, // #f0fcf2
        2: { r: 0.87, g: 0.97, b: 0.89 }, // #def8e3
        3: { r: 0.80, g: 0.95, b: 0.83 }, // #ccf2d4
        4: { r: 0.69, g: 0.92, b: 0.74 }, // #b0ebbe
        5: { r: 0.53, g: 0.87, b: 0.60 }, // #87dd99
        6: { r: 0.37, g: 0.82, b: 0.46 }, // #5ed175
        7: { r: 0.22, g: 0.75, b: 0.33 }, // #38bf54
        8: { r: 0.06, g: 0.67, b: 0.20 }, // #0fab33
        9: { r: 0.05, g: 0.58, b: 0.17 }, // #0d942b
        10: { r: 0.04, g: 0.48, b: 0.14 }, // #0a7a24
        11: { r: 0.03, g: 0.39, b: 0.11 }, // #08631c
        12: { r: 0.02, g: 0.29, b: 0.08 }, // #044a15
      },
      red: {
        1: { r: 1.00, g: 0.95, b: 0.95 }, // #fff2f2
        2: { r: 1.00, g: 0.89, b: 0.89 }, // #ffe3e3
        3: { r: 1.00, g: 0.82, b: 0.82 }, // #ffd1d1
        4: { r: 1.00, g: 0.71, b: 0.71 }, // #ffb5b5
        5: { r: 0.99, g: 0.55, b: 0.55 }, // #fc8d8d
        6: { r: 0.99, g: 0.39, b: 0.39 }, // #fc6363
        7: { r: 0.99, g: 0.24, b: 0.24 }, // #fc3d3d
        8: { r: 0.98, g: 0.08, b: 0.08 }, // #fa1414
        9: { r: 0.87, g: 0.04, b: 0.04 }, // #dd0a0a
        10: { r: 0.73, g: 0.03, b: 0.03 }, // #ba0808
        11: { r: 0.58, g: 0.02, b: 0.02 }, // #940505
        12: { r: 0.43, g: 0.01, b: 0.01 }, // #6e0303
      },
      yellow: {
        1: { r: 1.00, g: 0.99, b: 0.94 }, // #fffcf0
        2: { r: 1.00, g: 0.97, b: 0.87 }, // #fff8de
        3: { r: 1.00, g: 0.95, b: 0.80 }, // #fff3cc
        4: { r: 1.00, g: 0.92, b: 0.69 }, // #ffebb0
        5: { r: 0.99, g: 0.87, b: 0.53 }, // #fcdd87
        6: { r: 0.99, g: 0.82, b: 0.37 }, // #fcd15e
        7: { r: 0.99, g: 0.75, b: 0.22 }, // #fcbf38
        8: { r: 0.98, g: 0.67, b: 0.06 }, // #faab0f
        9: { r: 0.87, g: 0.58, b: 0.04 }, // #dd940a
        10: { r: 0.73, g: 0.48, b: 0.03 }, // #ba7a08
        11: { r: 0.58, g: 0.39, b: 0.02 }, // #946305
        12: { r: 0.43, g: 0.29, b: 0.01 }, // #6e4a03
      },
      orange: {
        1: { r: 1.00, g: 0.97, b: 0.94 }, // #fff7f0
        2: { r: 1.00, g: 0.94, b: 0.87 }, // #ffede0
        3: { r: 1.00, g: 0.91, b: 0.80 }, // #ffe8cc
        4: { r: 1.00, g: 0.85, b: 0.69 }, // #ffd9b0
        5: { r: 0.99, g: 0.77, b: 0.53 }, // #fcc487
        6: { r: 0.99, g: 0.69, b: 0.37 }, // #fcaf5e
        7: { r: 0.99, g: 0.59, b: 0.22 }, // #fc9638
        8: { r: 0.98, g: 0.49, b: 0.06 }, // #fa7d0f
        9: { r: 0.87, g: 0.41, b: 0.04 }, // #dd690a
        10: { r: 0.73, g: 0.33, b: 0.03 }, // #ba5508
        11: { r: 0.58, g: 0.25, b: 0.02 }, // #944105
        12: { r: 0.43, g: 0.17, b: 0.01 }, // #6e2f03
      },
    },
  },
  spacing: {
    none: 0,
    px: 1,
    '4xs': 2,
    '3xs': 4,
    '2xs': 6,
    xs: 8,
    sm: 10,
    md: 12,
    base: 16,
    lg: 20,
    xl: 24,
    '2xl': 32,
    '3xl': 40,
    '4xl': 48,
    '5xl': 64,
    '6xl': 80,
    negative: {
      px: -1,
      '4xs': -2,
      '3xs': -4,
      '2xs': -6,
      xs: -8,
      sm: -10,
      md: -12,
      base: -16,
    },
  },
  typography: {
    size: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 32,
      '5xl': 40,
      '6xl': 48,
    },
    weight: {
      normal: 400,
      bold: 700,
    },
    lineHeight: {
      none: '100%',
      tight: '125%',
      normal: '150%',
      relaxed: '175%',
      loose: '200%',
    },
  },
  radius: {
    none: 0,
    sm: 2,
    base: 4,
    md: 6,
    lg: 8,
    xl: 12,
    full: 9999,
  },
};

// Local Variablesの作成関数
async function createVariableCollection(name: string) {
  const collections = figma.variables.getLocalVariableCollections();
  const existingCollection = collections.find((c) => c.name === name);

  if (existingCollection) {
    return existingCollection;
  }

  return await figma.variables.createVariableCollection(name);
}

// 変数の作成関数
async function createVariable(
  collection: VariableCollection,
  name: string,
  type: VariableResolvedDataType,
  value: any,
) {
  const variable = figma.variables.createVariable(name, collection.id, type);
  variable.setValueForMode(collection.defaultModeId, value);
  return variable;
}

// メインの処理
async function initializeVariables() {
  const collection = await createVariableCollection('Design Tokens');

  // Colors
  for (const [colorName, shades] of Object.entries(tokens.colors)) {
    for (const [shade, value] of Object.entries(shades)) {
      await createVariable(
        collection,
        `color/${colorName}/${shade}`,
        'COLOR',
        value,
      );
    }
  }

  // Spacing
  for (const [key, value] of Object.entries(tokens.spacing)) {
    await createVariable(collection, `spacing/${key}`, 'FLOAT', value);
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

// UIからのメッセージ処理
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'init-variables') {
    try {
      await initializeVariables();
      figma.notify('Local Variables created successfully! 🎉');
    } catch (error) {
      figma.notify('Error creating variables', { error: true });
      console.error(error);
    }
  }

  // プラグインを閉じる
  figma.closePlugin();
};
