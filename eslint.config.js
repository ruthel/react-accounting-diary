import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';

export default [
  eslint.configs.recommended,
  {
    files: ['src/lib/**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
      react,
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        Node: 'readonly',
        File: 'readonly',
        FileReader: 'readonly',
        Blob: 'readonly',
        URL: 'readonly',
        Uint8Array: 'readonly',
        atob: 'readonly',
        setTimeout: 'readonly',
        Promise: 'readonly',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', 'src/dev/'],
  },
];
