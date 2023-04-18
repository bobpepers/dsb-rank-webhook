module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    module: "node18",
    requireConfigFile: false,
    babelOptions: {
      parserOpts: {
        plugins: ["importAssertions"],
      },
    },
  },
  settings: {
    "import/extensions": [
      ".js",
      ".jsx",
      ".cjs",
      ".mjs",
    ],
  },
  plugins: [
    "security",
  ],
  extends: [
    "airbnb",
    "plugin:security/recommended",
  ],
  rules: {
    "consistent-return": 0,
    "no-shadow": 0,
    "no-console": 0,
    "no-unused-vars": 0,
    "func-names": 0,
    "max-len": 0,
    quotes: 0,
    "import/prefer-default-export": "off",
    commonjs: 0,
  },
};
