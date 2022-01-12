module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    "prettier",
  ],
  extends: [
    'airbnb-typescript',
    "prettier",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'mysql/*', 'keycloak/*'],
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}]
  },
  overrides: [
    {
      "files": ["src/migration/*.ts"], // Or *.test.js
      "rules": {
        '@typescript-eslint/naming-convention': 'off'
      }
    }
  ],
};
