const plans = [
  {
    id: 'start',
    label: 'Только выхожу на маркетплейс',
    title: 'Старт',
    desc: 'Первый раз — это всегда много вопросов и страх сделать что-то не так. Мы уже прошли этот путь с сотнями продавцов. Зарегистрируем, настроим, запустим — и объясним каждый шаг.',
    price: 'от 25 000 ₽',
    period: 'от 3 дней',
    cta: 'Хочу запуститься',
    features: [
      'Регистрация кабинета',
      'Создание продающих карточек',
      'Расчёт ценообразования',
      'Выбор схемы доставки',
      'Старт продаж',
    ],
    popular: false,
  },
  {
    id: 'growth',
    label: 'Продаю, но что-то идёт не так',
    title: 'Рост',
    desc: 'Товар есть, кабинет есть, реклама крутится — а результата нет или он нестабильный. Разберёмся где дыра, перестроим стратегию и сделаем так чтобы каждый рубль работал на прибыль.',
    price: 'от 30 000 ₽',
    period: 'ежемесячно',
    cta: 'Хочу разобраться',
    features: [
      'Аналитика конкурентов',
      'Стратегия продвижения',
      'Обновление контента и SEO',
      'Запуск и ведение рекламы',
      'Ежемесячная отчётность',
    ],
    popular: true,
  },
  {
    id: 'full',
    label: 'Хочу заниматься бизнесом, а не маркетплейсом',
    title: 'Под ключ',
    desc: 'Маркетплейс требует внимания каждый день — это факт. Если этого внимания нет, продажи падают. Мы берём кабинет на себя полностью — вы видите результат, не вникая в детали.',
    price: 'от 45 000 ₽',
    period: 'ежемесячно',
    cta: 'Хочу делегировать',
    features: [
      'Всё из тарифа "Рост"',
      'Ежедневный мониторинг кабинета',
      'Общение с покупателями и поддержкой',
      'Финансовая аналитика',
      'Логистика и поставки',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-light" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Найдите себя — и мы поймём как помочь</h2>
          <p className="section-subtitle mx-auto text-center">
            Три формата работы — под разные задачи и уровни бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({ id, label, title, desc, price, period, cta, features, popular }) => (
            <div key={id} className={`relative rounded-2xl p-8 flex flex-col ${
              popular
                ? 'bg-navy text-white shadow-xl'
                : 'bg-white border border-gray-100 shadow-sm'
            }`}>
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Чаще всего выбирают
                  </span>
                </div>
              )}

              <div className={`text-xs font-semibold mb-2 ${popular ? 'text-amber' : 'text-amber'}`}>
                {label}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${popular ? 'text-white' : 'text-navy-dark'}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${popular ? 'text-blue-100' : 'text-gray-500'}`}>
                {desc}
              </p>

              <div className="mb-6">
                <div className={`text-3xl font-bold ${popular ? 'text-white' : 'text-navy-dark'}`}>{price}</div>
                <div className={`text-sm mt-1 ${popular ? 'text-blue-200' : 'text-gray-400'}`}>{period}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    <span className="text-amber flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#audit" className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all duration-200 ${
                popular
                  ? 'bg-amber text-white hover:bg-amber-hover'
                  : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
              }`}>
                {cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Не уверены какой формат подходит? Начните с бесплатного аудита — разберёмся вместе.
        </p>
      </div>
    </section>
  )
}
