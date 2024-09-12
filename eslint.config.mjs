import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: true,
    jsonc: false,

    lessOpinionated: true,
    isInEditor: false,

    stylistic: {
      semi: true,
      indent: 2,
      quotes: 'single',
    },

    formatters: {
      css: true,
    },

    ignores: [
      'next-env.d.ts',
      '**/ui/*.tsx',
      '**/hooks/*.ts',
      'tailwind.config.ts',
    ],
  },
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.e2e.ts'],
  },
  {
    rules: {
      'import/order': 'off', // Avoid conflicts with `simple-import-sort` plugin
      'sort-imports': 'off', // Avoid conflicts with `simple-import-sort` plugin
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off', // Allow using `process.env`,
      'no-console': 'error',
    },
  },
);
