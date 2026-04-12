import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'coverage',
      'test-results',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        console: 'readonly',   //FIX ADDED

        // Jest globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]