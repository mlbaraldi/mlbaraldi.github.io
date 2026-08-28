import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/footer'
import { LanguageProvider } from '@/lib/i18n'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marcelo Luiz Baraldi | Software Engineer',
  description: 'Backend and fullstack engineering, system architecture, and AI agent orchestration.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <div className="crt-overlay" aria-hidden="true" />
        <LanguageProvider>
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
