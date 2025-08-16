import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
// import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Debajyoti Chatterjee | Full-Stack Web Developer in India'

const description =
  "Skilled full-stack web developer in India. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!"

const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://dev-portfolio-mu-gules.vercel.app/'

export const metadata: Metadata = {
  title,
  description,
  category: 'technology',
  metadataBase: new URL('https://dev-portfolio-mu-gules.vercel.app/'),
  alternates: {
    canonical: url,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Debajyoti Chatterjee Portfolio',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        {/* <ThemeMenu /> */}
        <Footer />
      </body>
    </html>
  )
}
