import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},  // Add this line
});

const eslintConfig = [  
  ...compat.config( {
    extends: ["eslint:recommended", "next", "next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["prettier", "react"],
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
    "rules": {
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        }
      ],
      "react/jsx-max-props-per-line": [1, { "maximum": 1 }],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-closing-bracket-location": [1, "tag-aligned"],
      "react/jsx-wrap-multiline": [
        "error",
        {
          "declaration": "parens-new-line",
          "assignment": "parens-new-line",
          "return": "parens-new-line",
          "arrow": "parens-new-line",
          "condition": "parens-new-line",
          "logical": "parens-new-line",
          "prop": "parens-new-line"
        }
      ],
      "no-unexpected-multiline": "off",
      'no-whitespace-before-property': 'off',
    }
  }),
  {
    "overrides": [
      {
        files: ["*.tsx"],
        rules: {
          "react/jsx-wrap-multiline": [
            "error",
            {
              declaration: "parens-new-line",
              assignment: "parens-new-line",
              return: "parens-new-line",
              arrow: "parens-new-line",
              condition: "parens-new-line",
              logical: "parens-new-line",
              prop: "parens-new-line"
            }
          ],
          "react/jsx-closing-bracket-location": [1, "tag-aligned"]
        }
      }
    ]
  }
];

export default eslintConfig;
