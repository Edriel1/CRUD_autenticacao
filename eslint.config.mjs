import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node },
  files: ["**/*js"],
  rules: {
   "no-unused-vars": "2",
  }
},
  pluginJs.configs.recommended,
];
