import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Спасибо за заявку — SellersHelp',
  description: 'Мы получили вашу заявку и свяжемся с вами в ближайшее время.',
}

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white/10 rounded-2xl p-10 text-white text-center">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">Заявка получена!</h1>
        <p className="text-blue-200 text-lg mb-8 leading-relaxed">
          Мы свяжемся с вами в ближайшее время. Специалист уже готовится к разговору.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-amber-hover transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  )
}
