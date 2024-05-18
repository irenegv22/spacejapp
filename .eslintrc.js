module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  ignorePatterns: ['node_modules/', 'dist/', 'coverage/', 'ios/', 'android/', '__tests__/__snapshots__'],
  rules: {
    'no-console': ['warn'],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        semi: true,
        bracketSpacing: true,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'import/order': 'off'
  }
};