module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: [2, 'never'],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-undef': 'off',
  },

}
