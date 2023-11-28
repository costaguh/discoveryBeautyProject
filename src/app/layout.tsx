import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  })

export const metadata: Metadata = {
  title: 'Discover the beauty',
  description: 'around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='' >
      <body className={montserrat.className} >
        {children}              
      </body>
    </html>
  )
}
