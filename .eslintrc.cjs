// package.json から ESM で呼び出したいので csj ファイルにしておく
// ESM から CommonJS は使える（逆は不可）
// eslint は CommonJS でできているため、cjsファイル内は CommonJS で書く
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true,
  },
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue/essential",
    "plugin:tailwindcss/recommended",
  ],
  "overrides": [],
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": './tsconfig.json',
    'extraFileExtensions': [
      '.vue',
    ],
  },
  "plugins": ["vue", "@typescript-eslint", "tailwindcss"],
  'settings': {
    'import/resolver': {
      'typescript': {}
    },
  },
  "rules": {
    // TypeScript 関連
    'import/extensions': [ // importのときにファイルの拡張子を記述しなくてもエラーにしない
      'error',
      {
        js: 'never',
        ts: 'never',
        vue: 'always',
        scss: 'always',
      },
    ],
    "no-underscore-dangle": "off", // _ で始まるpropertyを許す
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }], // const の場合のみ禁止
    "import/no-default-export": "error", // default-export 禁止
    "import/prefer-default-export": "off", // 上記のため、default-export の強要はなくす
    '@typescript-eslint/naming-convention': [
      'error', {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: "allow", // 初めの underscore を許す（ただし1つだけ）
      },
    ],

    // CSS (tailwind) 関連
    "tailwindcss/no-custom-classname": "off",

    // HTML 関連
    "vue/multi-word-component-names": "off", // 1単語を許す
    "vue/max-attributes-per-line": [
      'error',
      {
        'singleline': 3,
        'multiline':  1,
      }
    ],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "beside"
    }]
  }
};
