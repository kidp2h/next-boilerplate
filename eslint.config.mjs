import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: {
      overrides: {
        'ts/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      },
    },
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
      html: true,
      markdown: 'prettier',
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
    files: ['**/*.spec.ts', '**/*.e2e.ts'],
  },
  {
    rules: {
      'react/prefer-destructuring-assignment': 'off',
      'node/prefer-global/process': 'off', // Allow using `process.env`,
      'no-console': 'warn',
      'react-refresh/only-export-components': 'off',
    },
  },
);
