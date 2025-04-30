import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist', '**/*.d.ts', 'node_modules'],
  },

  js.configs.recommended,

  // TypeScript конфигурация
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 2021,
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
        Promise: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',  // Путь к tsconfig.json
        },
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs['recommended-requiring-type-checking'].rules,

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

      'no-console': 'error',

      // Пустые строки между логическими блоками
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch', 'try'] },
        { blankLine: 'always', prev: ['if', 'for', 'while', 'switch', 'try'], next: '*' },
      ],
    },
  },

  // React конфигурация
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json', // Указываем путь к tsconfig
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Отключаем требование React в JSX (React 17+)
      'react/react-in-jsx-scope': 'off',

      // Обязательные пустые строки перед return, if, const и т.д.
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch', 'try'] },
        { blankLine: 'always', prev: ['if', 'for', 'while', 'switch', 'try'], next: '*' },
      ],

      // Правила для React
      'react/jsx-key': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react-refresh/only-export-components': 'warn',
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'error',
      'react/no-unescaped-entities': 'off',
      'no-undef': 'off',
    },
  },
];
