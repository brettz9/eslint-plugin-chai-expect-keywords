import globals from 'globals';
import js from '@eslint/js';

import chaiExpectKeywords from './index.js';

export default /** @type {import('eslint').Linter.Config} */ ([
  js.configs.recommended,
  chaiExpectKeywords.configs.recommended,
  {
    'ignores': [
      '**/node_modules/*'
    ],
    'languageOptions': {
      ecmaVersion: 2022,
      globals: {
        ...globals.builtin,
        ...globals.node,
      },
    },
    'rules': {}
  }
]);
