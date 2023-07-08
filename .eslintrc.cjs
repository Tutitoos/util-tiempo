module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier"],
  plugins: ["import"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/first": "error",
        "import/no-duplicates": "error",
        "no-duplicate-imports": "error",
        "no-implicit-coercion": "off",
        "no-unused-vars": ["error"],
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "guard-for-in": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/first": "error",
    "import/no-duplicates": "error",
    "no-duplicate-imports": "error",
    "no-implicit-coercion": "off",
  },
};
