module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react+(|-dom|-transition-group)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
