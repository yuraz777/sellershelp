import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SellersHelp — Управление и продвижение на маркетплейсах',
  description: 'Маркетплейс — это живой организм. Мы за ним следим каждый день, пока вы занимаетесь бизнесом. Профессиональное ведение кабинетов на Wildberries и Ozon.',
  keywords: 'маркетплейс, Wildberries, Ozon, продвижение, ведение кабинета, SEO, реклама',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    other: [
      { rel: 'icon', url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'SellersHelp — Управление на маркетплейсах',
    description: 'Команда профессионалов берёт на себя всё — контент, рекламу, аналитику, логистику.',
    url: 'https://sellershelp.ru',
    siteName: 'SellersHelp',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://sellershelp.ru/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SellersHelp — Помощь продавцам на маркетплейсах',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
