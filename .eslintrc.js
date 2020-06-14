module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-unused-vars': [
      2,
      {
        argsIgnorePattern: '_',
        varsIgnorePattern: '^ignored?$',
      },
    ],
  },
};
