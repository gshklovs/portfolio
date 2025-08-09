import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Greg Shklovski · Portfolio',
  description:
    'Projects, experience, and contact for Greg Shklovski (CSE @ UCI 2025).',
  openGraph: {
    title: 'Greg Shklovski · Portfolio',
    description:
      'Projects, experience, and contact for Greg Shklovski (CSE @ UCI 2025).',
    type: 'website',
    url: 'https://example.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greg Shklovski · Portfolio',
    description:
      'Projects, experience, and contact for Greg Shklovski (CSE @ UCI 2025).',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}