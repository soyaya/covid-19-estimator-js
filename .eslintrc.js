module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "no-param-reassign": ["error", { "props": false }],
    "arrow-body-style": ["error", "always"],
    "max-len": ["error", { "code": 200 }],
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }]

  },
};
 