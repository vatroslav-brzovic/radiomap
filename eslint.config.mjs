import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, 
      },
    },
    plugins: ["react", "react-native", "prettier"], 
    extends: [
      "eslint:recommended", 
      "plugin:react/recommended", 
      "plugin:react-native/all", 
      "plugin:@typescript-eslint/recommended", 
      "plugin:prettier/recommended", 
    ],
    parser: "@typescript-eslint/parser", 
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module", 
      ecmaFeatures: {
        jsx: true, 
      },
    },
    rules: {
      "prettier/prettier": "error", 
      "react/prop-types": "off", 
      "react-native/no-inline-styles": "warn", 
      "react-native/no-unused-styles": "warn", 
      "@typescript-eslint/no-unused-vars": "warn", 
    },
  },
];
