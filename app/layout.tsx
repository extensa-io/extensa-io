import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Néstor Daza - MongoDB Developer Advocate & Software Engineer',
  description: 'MongoDB Developer Advocate and Software Engineer helping developers build better applications. Speaker, writer, and expert in database design, AI applications, and developer tools.',
  keywords: ['MongoDB', 'Developer Advocate', 'Software Engineer', 'Database Design', 'AI Applications', 'Vector Search', 'Speaker', 'Technical Writing'],
  authors: [{ name: 'Néstor Daza', url: 'https://extensa.io' }],
  creator: 'Néstor Daza',
  publisher: 'Néstor Daza',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://extensa.io',
    siteName: 'Néstor Daza',
    title: 'Néstor Daza - MongoDB Developer Advocate & Software Engineer',
    description: 'MongoDB Developer Advocate and Software Engineer helping developers build better applications. Speaker, writer, and expert in database design, AI applications, and developer tools.',
    images: [
      {
        url: 'https://extensa.io/headshot.png',
        width: 300,
        height: 300,
        alt: 'Néstor Daza - MongoDB Developer Advocate',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Néstor Daza - MongoDB Developer Advocate & Software Engineer',
    description: 'MongoDB Developer Advocate and Software Engineer helping developers build better applications. Speaker, writer, and expert in database design, AI applications, and developer tools.',
    images: ['https://extensa.io/headshot.png'],
  },
  alternates: {
    canonical: 'https://extensa.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}