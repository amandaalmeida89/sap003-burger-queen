module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb', 'airbnb/hooks'
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
    'semi': ['error', 'always'],
    'quotes': ['error', 'double'],
    'no-console': 'off',
    'linebreak-style': 0,
    'prefer-destructuring': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension':0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types':0,
   },
};