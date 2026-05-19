import tseslintParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

import { VUE_RULES } from './rules.js'

export const plugin = [...vue.configs['flat/recommended-error']]

export const parser = {
  ts: tseslintParser,
  vue: vueParser,
}

export const globals = {
  nuxt: {
    ref: 'readonly',
    computed: 'readonly',
    watch: 'readonly',
    watchEffect: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
  },
}

export const rules = VUE_RULES

export default {
  plugin,
  rules,
  parser,
  globals,
}
