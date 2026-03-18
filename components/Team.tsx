import Image from 'next/image'

const team = [
  {
    name: 'Николай',
    role: 'Коммерческий директор',
    desc: 'Предприниматель с опытом 10+ лет. Генератор идей, собственник международных бизнесов. Лично общается с новыми клиентами.',
    photo: '/team/nikolay.jpg',
  },
  {
    name: 'Ольга',
    role: 'Исполнительный директор',
    desc: 'Координатор всех процессов. Высшее образование в области рекламы, 12+ лет в продажах и маркетинге, 7+ лет на руководящих должностях.',
    photo: '/team/olga.jpg',
  },
  {
    name: 'Юрий',
    role: 'Финансовый директор',
    desc: 'Высшее экономическое образование, 25+ лет в продажах. Практик-рационализатор, вдохновитель развития команды.',
    photo: '/team/yuriy.jpg',
  },
  {
    name: 'Светлана',
    role: 'Аналитика и оцифровка',
    desc: 'Разрабатывает инструменты анализа данных, строит отчёты и системы оцифровки. Сильное аналитическое мышление — возглавляет направление работы с данными.',
    photo: '/team/svetlana.jpg',
  },
  {
    name: 'Анастасия',
    role: 'Аккаунт-менеджер',
    desc: 'Душа команды и мастер коммуникации. Отлично разбирается в тонкостях ведения кабинетов и умеет найти подход к любому клиенту.',
    photo: '/team/anastasia.jpg',
  },
  {
    name: 'Дарья',
    role: 'Аккаунт-менеджер',
    desc: 'Несмотря на молодость — опыт ведения крупных проектов с миллионными оборотами. Рассудительна, внимательна, хорошо разбирается в рекламе.',
    photo: '/team/darya.jpg',
  },
  {
    name: 'Анна',
    role: 'Аккаунт-менеджер',
    desc: 'Опыт полного ведения и продвижения кабинетов в различных нишах и категориях. Хорошо чувствует масштаб. Внимательна и ответственна.',
    photo: '/team/anna.jpg',
  },
  {
    name: 'Елизавета',
    role: 'Аккаунт-менеджер',
    desc: 'За два года — большая насмотренность и опыт полного ведения нескольких крупных кабинетов в абсолютно разных нишах.',
    photo: '/team/elizaveta.jpg',
  },
  {
    name: 'Владислава',
    role: 'Операционный менеджер',
    desc: 'Знает все внутренние процессы, документы и отчёты. Широкая насмотренность. Всегда придёт на помощь коллегам — незаменимый игрок команды.',
    photo: '/team/vladislava.jpg',
  },
  {
    name: 'Яна',
    role: 'Операционный менеджер',
    desc: 'Прекрасно работает с таблицами, очень внимательна и обязательна. Выполняет задачи с большой скоростью. Коллеги всегда могут на неё положиться.',
    photo: '/team/yana.jpg',
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="section-title">Люди которые каждый день работают с маркетплейсами</h2>
          <p className="section-subtitle">
            Мы не теоретики. Каждый специалист ведёт реальные кабинеты и знает как работают алгоритмы не из учебника, а из практики. Именно поэтому клиенты остаются с нами годами.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map(({ name, role, desc, photo }) => (
            <div key={name} className="group text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-navy-dark text-sm">{name}</h3>
              <p className="text-xs text-amber font-semibold mt-0.5 mb-2">{role}</p>
              <p className="text-xs text-gray-500 leading-relaxed hidden md:block">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
