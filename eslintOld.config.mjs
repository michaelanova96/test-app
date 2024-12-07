import vue from 'eslint-plugin-vue';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  {
    plugins: {
      vue,
      '@typescript-eslint': typescriptEslint,
      prettier,
      'unused-imports': unusedImports,
      'vue-eslint-parser': vueParser
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.vue'],
        projectService: {
          allowDefaultProject: ['*.ts']
        }
      }
    },

    rules: {
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/v-for-delimiter-style': ['error', 'in'],
      radix: ['error', 'always'],
      curly: 1,
      '@typescript-eslint/explicit-function-return-type': [2],
      '@typescript-eslint/no-explicit-any': [2],
      '@typescript-eslint/prefer-ts-expect-error': [2],
      '@typescript-eslint/ban-ts-comment': [0],
      'ordered-imports': [0],
      'object-literal-sort-keys': [0],
      'new-parens': 1,
      'no-bitwise': 1,
      'no-cond-assign': 1,
      'no-trailing-spaces': 0,
      'eol-last': 1,

      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true
        }
      ],

      'no-var': 2,
      'prettier/prettier': 'warn',

      'no-void': [
        'error',
        {
          allowAsStatement: true
        }
      ],

      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ]
    }
  }
];
