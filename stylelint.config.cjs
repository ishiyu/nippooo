module.exports = {
  "ignoreFiles": ["**/*.js", "**/*.ts", "**/*.svg"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
  ],
  "overrides": [{
    "files": ["**/*.vue"],
    "customSyntax": "postcss-html"
  }],
  "rules": {
    "at-rule-no-unknown": [true, {
        "ignoreAtRules": ["tailwind", "layer", "apply"]
    }],
    "function-no-unknown": [true, {
      "ignoreFunctions": ["theme", "screen"]
    }],
  }
}
