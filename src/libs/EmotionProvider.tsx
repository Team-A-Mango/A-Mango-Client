'use client'

import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'
import theme from '@/styles/theme'

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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}
