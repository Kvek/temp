module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:typescript-sort-keys/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'better-styled-components',
  ],
  rules: {
    '@typescript-eslint/no-shadow': [0],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'better-styled-components/sort-declarations-alphabetically': 2,
    camelcase: [0],
    'comma-dangle': [0],
    'implicit-arrow-linebreak': [0],
    'import/extensions': [0],
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [0],
    'import/order': 'off',
    'import/prefer-default-export': [0],
    indent: [0],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'no-confusing-arrow': [0],
    'no-shadow': [0],
    'no-unused-vars': 'off',
    'no-use-before-define': [0],
    'object-curly-newline': 'off',
    'operator-linebreak': [0],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: 'multiline-const',
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'break',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'for',
      },
      {
        blankLine: 'always',
        next: 'expression',
        prev: 'const',
      },
      {
        blankLine: 'always',
        next: 'expression',
        prev: 'expression',
      },
    ],
    'react/forbid-prop-types': [0],
    'react/jsx-closing-bracket-location': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': [2],
    'react/jsx-uses-react': [0],
    'react/jsx-wrap-multilines': [2, { prop: 'ignore' }],
    'react/prop-types': [0],
    'react/react-in-jsx-scope': [0],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^@'], ['^(react|redux)'], ['^'], ['^\\.']],
      },
    ],

    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: true }],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: true, natural: true },
    ],
  },
};
