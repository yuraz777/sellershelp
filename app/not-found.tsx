import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">

        <div className="text-8xl font-bold text-navy mb-4" style={{ color: '#1a2e4a' }}>
          404
        </div>

        <h1 className="text-2xl font-bold mb-3" style={{ color: '#1a2e4a' }}>
          Страница не найдена
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Возможно, ссылка устарела или страница была перемещена.
          Вернитесь на главную — там есть всё что нужно.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-navy text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#1a2e4a' }}
          >
            На главную
          </Link>
          <Link
            href="/#audit"
            className="inline-block border-2 border-navy text-navy font-semibold py-3 px-8 rounded-xl hover:bg-navy hover:text-white transition-all"
            style={{ borderColor: '#1a2e4a', color: '#1a2e4a' }}
          >
            Бесплатный аудит
          </Link>
        </div>

      </div>
    </div>
  )
}
