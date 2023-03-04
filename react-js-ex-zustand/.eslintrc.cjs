module.exports = {
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    extends: [
      'airbnb',
      'airbnb-typescript',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
      'prettier/prettier': ['error'],
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
    },
    overrides: [
      {
        files: ['src/**/*Slice.ts'],
        rules: { 'no-param-reassign': ['error', { props: false }] },
      },
    ],
  };
  