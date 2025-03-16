import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { 
    languageOptions: { 
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { 
        ...globals.browser,
        ...globals.node 
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        jsx: true,
      }, 
    }
  },
  {
    plugins: {
      prettier: eslintPluginPrettier, 
      react: pluginReact, 
      "@typescript-eslint": tseslint, 
      "@eslint/js": pluginJs
    }
  },
];