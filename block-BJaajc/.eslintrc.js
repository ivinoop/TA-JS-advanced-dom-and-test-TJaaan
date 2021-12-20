module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-console': 'off',
  },
};
