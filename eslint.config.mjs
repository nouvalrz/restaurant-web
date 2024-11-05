import globals from "globals";
import pluginJs from "@eslint/js";
import daSyle from "eslint-config-dicodingacademy";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daSyle,
  eslintConfigPrettier,
];
