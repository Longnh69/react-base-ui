module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.cjs',
    'vite-env.d.ts',
    'postcss.config.cjs',
    'tailwind.config.cjs',
    'tailwind.presets.cjs',
    'vite.config.ts',
    'build',
    'dist',
    'lib',
  ],
  plugins: ['react', 'react-refresh', '@typescript-eslint/eslint-plugin'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', // Type trả về của fn
    '@typescript-eslint/no-namespace': 'off', // Tên namespace
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off', // Toán tử 3 ngôi
    '@typescript-eslint/consistent-type-definitions': 'off', // Dùng interface thay cho type
    '@typescript-eslint/dot-notation': 'off', // Có thể dùng object[`attribute`]
    '@typescript-eslint/no-confusing-void-expression': 'off', // Có thể dùng object[`attribute`]
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off', // Template string có type là any
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // Dùng any
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prefer-promise-reject-errors': 'off', // Promis.reject chỉ trả về string | number | null
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
  },
}
