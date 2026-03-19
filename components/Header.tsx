'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SellersHelp — Помощь продавцам"
              width={160}
              height={60}
              className="h-16 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              ['Преимущества', '#benefits'],
              ['Кейсы', '#cases'],
              ['Отзывы', '#reviews'],
              ['Тарифы', '#pricing'],
              ['Команда', '#team'],
              ['Контакты', '#contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-gray-600 hover:text-navy font-medium transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79052836479" className="text-sm font-semibold text-navy">+7 905 283 64 79</a>
            <a href="#audit" className="btn-primary text-sm px-5 py-2.5">Бесплатный аудит</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-0.5 bg-navy mb-1.5"></div>
            <div className="w-6 h-0.5 bg-navy mb-1.5"></div>
            <div className="w-6 h-0.5 bg-navy"></div>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {[
              ['Преимущества', '#benefits'],
              ['Кейсы', '#cases'],
              ['Отзывы', '#reviews'],
              ['Тарифы', '#pricing'],
              ['Команда', '#team'],
              ['Контакты', '#contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-navy font-medium border-b border-gray-50">
                {label}
              </a>
            ))}
            <a href="tel:+79052836479" className="block py-3 font-semibold text-navy">+7 905 283 64 79</a>
            <a href="#audit" className="btn-primary block text-center mt-3">Бесплатный аудит</a>
          </div>
        )}
      </div>
    </header>
  )
}
