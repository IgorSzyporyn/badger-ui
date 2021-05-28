import type { ThemeConfig, ThemeMetrics } from '../types'

export function convertMetrics(config: ThemeConfig<unknown>): ThemeMetrics {
  return {
    gutter: `${config.gutter}px`,
    gutterCollapsed: `${Math.round(config.gutter * 0.75)}px`,
    gutterExpanded: `${Math.round(config.gutter * 1.5)}px`,
    spacing: `${Math.round(config.gutter * 2)}px`,
    spacingCollapsed: `${Math.round(config.gutter * 2 * 0.75)}px`,
    spacingExpanded: `${Math.round(config.gutter * 2 * 1.5)}px`,
    borderRadius: `${Math.round(config.gutter * 0.75)}px`,
  }
}
