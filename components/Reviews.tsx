const reviews = [
  {
    name: 'Марина',
    role: 'Владелица магазинов на Ozon и WB',
    text: 'Открывая каждое предложение от других — все одинаковые, простыни прайсов под копирку. Сообщение Николая выгодно отличалось конкретикой. Сразу стало понятно — человек разбирается. Я очень рада, что сотрудничала с грамотным и адекватным профессионалом своего дела.',
    initial: 'М',
  },
  {
    name: 'Евклидис Майропулос',
    role: 'Управляющий магазином на Wildberries',
    text: 'Все предыдущие казались мне шарлатанами либо поверхностно понимающими людьми. Николай — похоже действительно специалист в данной области. Все поставленные задачи были выполнены. Цены довольно демократичные.',
    initial: 'Е',
  },
  {
    name: 'Елена Глущенко',
    role: 'Ozon, Wildberries, Яндекс Маркет',
    text: 'Это единственная команда, которая согласилась мне помочь — до этого все отказывали. Всё решалось очень быстро, я даже не ожидала что так оперативно. Ни один мой вопрос не остался без ответа. Однозначно рекомендую.',
    initial: 'Е',
  },
  {
    name: 'Александра Егорова',
    role: 'Владелица магазинов на Ozon и WB',
    text: 'Сотрудничаем не первый месяц, ведут кабинет на ВБ и ОЗОН. Продажи растут! Постоянно в курсе событий на маркетплейсах — делают работу качественно, профессионально и за адекватные деньги.',
    initial: 'А',
  },
  {
    name: 'Тимур',
    role: 'Владелец магазинов на Ozon и WB',
    text: 'Отбирал с опытом — не ошибся. Чувствуется что работает профессиональная команда. Специалисты всегда на связи, терпеливые и клиентоориентированные. Сделали всё быстро и чётко.',
    initial: 'Т',
  },
  {
    name: 'Александра Кубукова',
    role: 'Владелица магазина на Ozon',
    text: 'К моменту разговора уже проанализировали карточку товара, посоветовали подходящее SEO и объяснили как улучшить инфографику. Без лишней терминологии, со знанием дела. Помогли составить план дальнейших действий.',
    initial: 'А',
  },
  {
    name: 'Вадим',
    role: 'Владелец магазина на Wildberries',
    text: 'Чувствуется практический опыт без воды. Оперативно, рекомендации дельные. Работы выполняли в срок на всех этапах. Приятно работать!',
    initial: 'В',
  },
  {
    name: 'Эльдар Курбатов',
    role: 'Владелец магазина на Ozon',
    text: 'Ребята профессионально, чётко, доходчиво выполнили свою работу. Всегда были на связи, доброжелательные и отзывчивые. У кого возникнут вопросы по работе с маркетплейсами — всем рекомендую.',
    initial: 'Э',
  },
]

export default function Reviews() {
  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">Нас не нужно уговаривать — послушайте клиентов</h2>
          <p className="section-subtitle mx-auto text-center">
            Все отзывы реальные. Люди пишут сами, без скриптов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, role, text, initial }) => (
            <div key={name} className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {initial}
                </div>
                <div>
                  <div className="font-bold text-navy-dark text-sm">{name}</div>
                  <div className="text-xs text-gray-400">{role}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{text}"</p>
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-amber text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
