import type { Linter } from 'eslint'

/**
 * eslint-plugin-vue's flat recommended-error preset.
 */
export declare const plugin: Linter.Config[]

/**
 * Parsers for Vue single-file component support.
 */
export declare const parser: Record<'ts' | 'vue', unknown>

/**
 * Runtime global variable sets available for generated ESLint configs.
 */
export declare const globals: {
  nuxt: Linter.Globals
}

/**
 * Built-in Vue rule overrides.
 */
export declare const rules: Linter.RulesRecord

declare const config: {
  plugin: typeof plugin
  parser: typeof parser
  globals: typeof globals
  rules: typeof rules
}

export default config
