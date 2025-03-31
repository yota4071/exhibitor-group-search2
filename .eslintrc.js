module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/warnings',
  ],
  plugins: ['sort-keys-fix', 'typescript-sort-keys', 'unused-imports'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          /* 昇順にソート */
          caseInsensitive: true,
          /* 大文字と小文字を区別しない */
          order: 'asc',
        },
      },
    ],
    // Enum の禁止
    'no-restricted-syntax': [
      'error',
      { message: "Don't declare enums", selector: 'TSEnumDeclaration' },
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
};
