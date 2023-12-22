import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/footer'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
const roboto = Roboto_Condensed({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Just a dev',
  description: 'personal page',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" >
      <body className={cn(
        'min-h-screen antialiased', roboto.className
      )}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  )
}

