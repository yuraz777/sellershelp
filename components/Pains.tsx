const pains = [
  {
    icon: '📉',
    title: 'Реклама крутится — продаж нет',
    desc: 'Деньги уходят, ставки растут, а заказов больше не становится. Непонятно где дыра.',
  },
  {
    icon: '💸',
    title: 'Комиссии выросли — работаете в ноль',
    desc: 'WB и Ozon снова подняли тарифы. Вы стараетесь больше, а зарабатываете меньше.',
  },
  {
    icon: '👤',
    title: 'Всё держится на одном человеке',
    desc: 'Заболел, ушёл в отпуск или уволился — и весь кабинет встал. Страшно даже думать.',
  },
  {
    icon: '🔍',
    title: 'Карточки есть, но покупатели не находят',
    desc: 'Товар хороший. Но в поиске его нет, конкуренты обгоняют, продажи не идут.',
  },
  {
    icon: '😤',
    title: 'Уже обжигались на фрилансерах',
    desc: 'Брали деньги, пропадали или делали "как у всех". Осадок остался, доверие потеряно.',
  },
  {
    icon: '⏰',
    title: 'Нет времени разбираться в правилах',
    desc: 'Маркетплейсы меняют алгоритмы каждый месяц. За всем не уследить — у вас бизнес.',
  },
]

export default function Pains() {
  return (
    <section className="py-20 bg-gray-light" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Что-то из этого про вас?</h2>
          <p className="section-subtitle mx-auto text-center">
            Если хотя бы один пункт резонирует — значит, пора поговорить.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map(({ icon, title, desc }) => (
            <div key={title} className="card hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold text-navy-dark mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#audit" className="btn-primary">
            Получить бесплатный аудит →
          </a>
        </div>
      </div>
    </section>
  )
}
