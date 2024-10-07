import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { pretendard } from '../src/styles/fonts'
import '../src/styles/globals.css'
import theme from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        { className: pretendard.variable },
        React.createElement(Story, null),
      ),
    withThemeFromJSXProvider({
      themes: { default: theme },
      defaultTheme: 'default',
      Provider: ThemeProvider,
    }),
  ],
}

export default preview
