import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/docs/assets/*',
      'src/main.jsx',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: '19.0.0',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...prettier.rules,
      'react/react-in-jsx-scope': 'off', // React 17以降では不要
    },
  },
  {
    files: ['playwright.config.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
      },
    },
  },
  {
    files: ['tests/**/*.js', 'tests-examples/**/*.js'],
    languageOptions: {
      globals: {
        localStorage: 'readonly',
      },
    },
  },
];
