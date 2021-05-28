import { ThemeConfig, ThemeSize } from '../types'

export function convertSize({
  typography: { fontSize },
}: ThemeConfig<unknown>): ThemeSize {
  const small = Math.round(fontSize * 0.625)
  const medium = Math.round(fontSize * 0.75)
  const normal = Math.round(fontSize * 1)
  const large = Math.round(fontSize * 1.25)
  const xlarge = Math.round(fontSize * 1.5)

  return {
    font: {
      small,
      medium,
      normal,
      large,
      xlarge,
    },
    icon: {
      small,
      medium,
      normal,
      large,
      xlarge,
    },
  }
}
