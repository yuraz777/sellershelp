const cases = [
  {
    niche: 'Спортивное питание',
    platforms: 'WB + Ozon',
    problem: 'Реклама съедала всю прибыль',
    result: 'Оборот с 1,2 до 2,8 млн руб./мес.',
    period: '2 месяца',
    highlight: '−40% рекламный бюджет, органика ×2,5',
    tools: ['Пересчёт юнит-экономики', 'Переработка карточек и SEO', 'Перестройка стратегии продвижения'],
  },
  {
    niche: 'Товары для кухни',
    platforms: 'WB',
    problem: 'Ушёл менеджер — рухнули продажи',
    result: 'Оборот с 900 тыс. до 1,6 млн руб./мес.',
    period: '1,5 месяца',
    highlight: 'Восстановление + рост. Работаем 2 года',
    tools: ['Восстановление кабинета', 'Регламенты и взаимозаменяемая команда', 'Система ежедневного мониторинга'],
  },
  {
    niche: 'Магазин чая',
    platforms: 'WB + Ozon',
    problem: 'Хотели роста — получили почти ×2',
    result: 'Выручка с 2,5 до 4,9 млн руб./мес.',
    period: '3,5 месяца',
    highlight: 'CTR вырос до 6%',
    tools: ['Редизайн карточек и инфографики', 'Запуск внешней рекламы', 'Реорганизация логистики по кластерам'],
  },
  {
    niche: 'Уход за телом',
    platforms: 'WB + Ozon',
    problem: 'Высококонкурентная ниша',
    result: 'Оборот с 880 тыс. до 4,5 млн руб./мес.',
    period: '3 месяца',
    highlight: 'Рост ×5, захват 15% доли рынка',
    tools: ['Контент-рейтинг до максимума', 'Обновление инфографики', 'Подключение бота-оптимизатора рекламы'],
  },
  {
    niche: 'Товары для дома',
    platforms: 'WB',
    problem: 'Запуск с нуля',
    result: 'Оборот 600 000 руб./мес.',
    period: '2 месяца',
    highlight: 'С нуля до стабильных продаж',
    tools: ['Анализ и отбор товаров', 'Регистрация и создание контента', 'Запуск рекламы и ценообразование'],
  },
]

export default function Cases() {
  return (
    <section className="py-20 bg-gray-light" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Не обещания — результаты</h2>
          <p className="section-subtitle mx-auto text-center">
            Реальные кейсы из разных ниш. Цифры — настоящие.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map(({ niche, platforms, problem, result, period, highlight, tools }) => (
            <div key={niche} className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-navy-dark text-lg">{niche}</h3>
                  <span className="text-xs text-gray-400 font-medium">{platforms}</span>
                </div>
                <span className="text-xs bg-navy/10 text-navy px-3 py-1 rounded-full font-medium">{period}</span>
              </div>

              {/* Problem */}
              <p className="text-sm text-gray-500 italic mb-4">"{problem}"</p>

              {/* Result highlight */}
              <div className="bg-amber/10 rounded-xl p-4 mb-4">
                <div className="text-sm font-bold text-amber-hover">{highlight}</div>
                <div className="text-base font-bold text-navy-dark mt-1">{result}</div>
              </div>

              {/* Tools */}
              <ul className="space-y-2 mt-auto">
                {tools.map(t => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#audit" className="btn-primary">
            Хочу такой же результат →
          </a>
        </div>
      </div>
    </section>
  )
}
