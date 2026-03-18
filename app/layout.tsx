import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SellersHelp — Управление и продвижение на маркетплейсах',
  description: 'Маркетплейс — это живой организм. Мы за ним следим каждый день, пока вы занимаетесь бизнесом. Профессиональное ведение кабинетов на Wildberries и Ozon.',
  keywords: 'маркетплейс, Wildberries, Ozon, продвижение, ведение кабинета, SEO, реклама',
  openGraph: {
    title: 'SellersHelp — Управление на маркетплейсах',
    description: 'Команда профессионалов берёт на себя всё — контент, рекламу, аналитику, логистику.',
    url: 'https://sellershelp.ru',
    siteName: 'SellersHelp',
    locale: 'ru_RU',
    type: 'website',
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
