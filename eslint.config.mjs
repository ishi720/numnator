import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'coverage/**', 'node_modules/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
  {
    // ルーティング用のページコンポーネントは単語1つの名前を許可する
    files: ['src/views/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['__test__/**/*.js'],
    languageOptions: {
      globals: { ...globals.jest }
    }
  }
];
