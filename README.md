# @krislintigo/eslint-config-vue

Companion package with Vue-specific pieces for `@krislintigo/eslint-config`.

## Install

```sh
pnpm add -D @krislintigo/eslint-config-vue eslint typescript
```

The package includes its Vue ESLint dependencies. `eslint` and `typescript` are peer dependencies and should be installed in each project that uses the config.

## Usage

Use this package from your main ESLint config builder:

```js
import vue from '@krislintigo/eslint-config-vue'

export default createConfig({
  extraExtends: vue.plugin,
  extraRules: vue.rules,
})
```

If you need to wire Vue single-file components manually, the package also exposes the parsers and globals:

```js
import vue from '@krislintigo/eslint-config-vue'

export default [
  ...baseConfig,
  ...vue.plugin,
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: vue.parser.vue,
      parserOptions: {
        parser: vue.parser.ts,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: vue.globals.nuxt,
    },
    rules: vue.rules,
  },
]
```
