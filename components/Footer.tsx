export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-xl mb-1">SellersHelp</div>
            <div className="text-gray-400 text-xs mb-4">Компания для людей</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Маркетплейс — это живой организм. Мы за ним следим каждый день, пока вы занимаетесь бизнесом.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-gray-300 font-semibold text-sm mb-4">Навигация</div>
            <ul className="space-y-2">
              {[
                ['Кейсы', '#cases'],
                ['Отзывы', '#reviews'],
                ['Тарифы', '#pricing'],
                ['Команда', '#team'],
                ['Бесплатный аудит', '#audit'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-gray-300 font-semibold text-sm mb-4">Контакты</div>
            <div className="space-y-3">
              <a href="tel:+79052836479" className="block text-gray-400 hover:text-white text-sm transition-colors">
                +7 905 283 64 79
              </a>
              <a href="mailto:ssellershelp@ya.ru" className="block text-gray-400 hover:text-white text-sm transition-colors">
                ssellershelp@ya.ru
              </a>
              <div className="text-gray-500 text-xs pt-2">
                ИНН 772314579555<br />
                КПП 771301001
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} SellersHelp. Все права защищены.
          </p>
          <a href="/policy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
