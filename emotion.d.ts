import '@emotion/react'
import { Theme as CustomTheme } from './path/to/your/theme'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
