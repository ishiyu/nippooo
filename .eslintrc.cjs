// package.json から ESM で呼び出したいので csj ファイルにしておく
// ESM から CommonJS は使える（逆は不可）
// eslint は CommonJS でできているため、cjsファイル内は CommonJS で書く
module.exports = {
  "root": true,
  "env": {
  "browser": true,
    "node": true,
    "es2021": true
  },
    "extends": [
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
    "sourceType": "module"
  },
  "plugins": ["vue", "@typescript-eslint", "tailwindcss"],
  "rules": {
    // CSS (tailwind) 関連
    "tailwindcss/no-custom-classname": "off",

    // HTML 関連
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
