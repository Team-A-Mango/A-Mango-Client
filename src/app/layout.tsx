'use client'

import '@/styles/globals.css'
import { EmotionProvider } from '@/libs/EmotionProvider'
import TanstackProviders from '@/libs/TanstackProviders'
import { pretendard } from '@/styles/fonts'
import { SearchProvider } from '@/utils/SearchContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={pretendard.variable}>
      <body>
        <TanstackProviders>
          <EmotionProvider>
            <SearchProvider>{children}</SearchProvider>
          </EmotionProvider>
        </TanstackProviders>
      </body>
    </html>
  )
}
