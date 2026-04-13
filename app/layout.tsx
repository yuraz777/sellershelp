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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(93877489, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
              });
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/93877489" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
