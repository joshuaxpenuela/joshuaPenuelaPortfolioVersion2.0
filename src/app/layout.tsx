import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { cn } from '@/src/lib/utils'

import './globals.css'
import Providers from '@/src/components/providers'
import Header from '@/src/components/header'
import Footer from '@/src/components/footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Joshua Penuela',
  description: 'Portfolio of Joshua Penuela',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning // Add this line here
        className={cn(
          'flex min-h-screen flex-col antialiased',
          poppins.variable
        )}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
