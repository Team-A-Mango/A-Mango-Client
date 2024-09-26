import '@emotion/react'
import { SerializedStyles } from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    text: {
      title: {
        largeM: SerializedStyles
        mediumB: SerializedStyles
        mediumR: SerializedStyles
        smallB: SerializedStyles
        smallR: SerializedStyles
      }
      body: {
        largeB: SerializedStyles
        largeR: SerializedStyles
        mediumB: SerializedStyles
        mediumR: SerializedStyles
      }
      caption1: {
        mediumB: SerializedStyles
        mediumR: SerializedStyles
      }
      caption2: {
        mediumB: SerializedStyles
        mediumR: SerializedStyles
      }
    }
    color: {
      main: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      main2: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      gray: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      system: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
      }
      system2: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
      }
      white: string
      black: string
    }
  }
}
