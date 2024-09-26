import type { Metadata } from 'next'
import '@/styles/globals.css'
import { EmotionProvider } from '@/libs/EmotionProvider'
import TanstackProviders from '@/libs/TanstackProviders'
import { pretendard } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={pretendard.variable}>
      <body>
        <TanstackProviders>
          <EmotionProvider>{children}</EmotionProvider>
        </TanstackProviders>
      </body>
    </html>
  )
}
