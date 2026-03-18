const steps = [
  {
    num: '01',
    title: 'Говорим честно',
    desc: 'Бесплатный аудит кабинета. Не продаём — разбираемся. Говорим что реально можно улучшить, а что и так работает хорошо.',
  },
  {
    num: '02',
    title: 'Договариваемся на берегу',
    desc: 'Прописываем план, сроки, зоны ответственности. Вы знаете что будет происходить — никакого "доверьтесь нам".',
  },
  {
    num: '03',
    title: 'Заходим в кабинет',
    desc: 'Обновляем контент, перестраиваем рекламу, считаем юнит-экономику. Делаем руками, а не советами.',
  },
  {
    num: '04',
    title: 'Следим каждый день',
    desc: 'Мониторинг, A/B-тесты, отзывы, аналитика. Маркетплейс не прощает паузы — мы это знаем.',
  },
  {
    num: '05',
    title: 'Растём вместе',
    desc: 'Новые товары, новые склады, новые категории. Думаем о вашем бизнесе на шаг вперёд.',
  },
]

export default function HowWeWork() {
  return (
    <section className="py-20 bg-white" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="section-title">Никаких сюрпризов — только понятные шаги</h2>
          <p className="section-subtitle">
            Прозрачность — это не слово на сайте. Это то как мы работаем каждый день.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} className="flex gap-8 items-start py-8 border-b border-gray-100 last:border-0">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-navy flex items-center justify-center">
                <span className="text-white font-bold text-lg">{num}</span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-navy-dark mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex flex-shrink-0 items-center pt-6">
                  <span className="text-2xl text-gray-200">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
