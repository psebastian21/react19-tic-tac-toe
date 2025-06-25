import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      js,
      react: pluginReact
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "no-undef": "error", // ← this enables undefined variable checks
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
]);
