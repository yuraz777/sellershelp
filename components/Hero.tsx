export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber/10 text-amber px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-amber rounded-full"></span>
            6 лет на рынке · 1000+ клиентов · Wildberries & Ozon
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight mb-6">
            Маркетплейс —<br />
            это живой организм.
            <span className="text-navy block mt-2">
              Мы за ним следим каждый день,
            </span>
            <span className="text-gray-500 font-medium block mt-1 text-3xl md:text-4xl">
              пока вы занимаетесь бизнесом.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
            Пока другие агентства шлют красивые отчёты — мы каждый день в вашем кабинете.
            Руками. Головой. С результатом.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#audit" className="btn-primary text-lg px-10 py-4">
              Узнать что мешает вашим продажам →
            </a>
            <a href="#cases" className="text-navy font-semibold hover:underline flex items-center gap-2">
              Смотреть кейсы
              <span>↓</span>
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-gray-100">
            {[
              { num: '6 лет', label: 'на рынке маркетплейсов' },
              { num: '1 000+', label: 'клиентов' },
              { num: '940', label: 'кабинетов' },
              { num: '120+', label: 'категорий товаров' },
            ].map(({ num, label }) => (
              <div key={num}>
                <div className="text-3xl font-bold text-navy">{num}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
