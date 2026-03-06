import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://zenwellnesscenter.com'),
  title: {
    default: 'Zen Wellness Center | Massage, Acupuncture & Reflexology in Vancouver',
    template: '%s | Zen Wellness Center',
  },
  description:
    'Vancouver\'s premier wellness center offering massage, acupuncture, and foot reflexology. Experienced practitioners, affordable rates. Book your appointment today.',
  keywords: [
    'massage Vancouver', 'acupuncture Vancouver', 'foot reflexology Vancouver',
    'wellness center Vancouver', 'deep tissue massage', 'Swedish massage',
    'Chinese medicine Vancouver', 'spa Vancouver', 'Zen Wellness Center',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Zen Wellness Center',
    title: 'Zen Wellness Center | Massage, Acupuncture & Reflexology in Vancouver',
    description: 'Vancouver\'s premier wellness center. Massage, acupuncture, and foot reflexology.',
    images: [{ url: '/images/spa-background12.jpg', width: 1200, height: 630, alt: 'Zen Wellness Center' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zen Wellness Center',
    description: 'Massage, Acupuncture & Foot Reflexology in Vancouver',
    images: ['/images/spa-background12.jpg'],
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
