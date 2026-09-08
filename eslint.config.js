const eslint = require('@eslint/js');

module.exports = [
  eslint.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        test: 'readonly',
        expect: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];
