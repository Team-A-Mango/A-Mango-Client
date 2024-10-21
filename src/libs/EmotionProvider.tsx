'use client'

import createCache from '@emotion/cache'
import {
  CacheProvider,
  ThemeProvider,
  Theme as EmotionTheme,
} from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'
import theme, { Theme as CustomTheme } from '@/styles/theme'

export function EmotionProvider({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css' })
    cache.compat = true
    return cache
  })

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme as EmotionTheme & CustomTheme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
