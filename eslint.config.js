const eslint = require('@eslint/js');

module.exports = [
  eslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs'
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];
