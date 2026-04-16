import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение — SellersHelp',
  description: 'Пользовательское соглашение сайта sellershelp.ru',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-navy mb-2">Пользовательское соглашение</h1>
          <p className="text-sm text-gray-500 mb-8">Редакция от 16 апреля 2026 г.</p>

          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">1. Общие положения</h2>
              <p>Настоящее Пользовательское соглашение регулирует отношения между ИП Зуевым Юрием Васильевичем (ИНН 772314579555), далее — «Исполнитель», и любым лицом, использующим сайт sellershelp.ru, далее — «Пользователь».</p>
              <p className="mt-2">Использование сайта означает полное и безоговорочное принятие условий настоящего Соглашения.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">2. Предмет соглашения</h2>
              <p>Сайт sellershelp.ru является информационным ресурсом и площадкой для оказания консультационных услуг по управлению продажами на маркетплейсах (Wildberries, Ozon, Яндекс Маркет и др.). Исполнитель предоставляет Пользователю доступ к информации об услугах и возможность направить заявку на консультацию или аудит.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">3. Права и обязанности пользователя</h2>
              <p className="mb-1">Пользователь вправе:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Свободно просматривать информацию, размещённую на сайте.</li>
                <li>Направлять заявки через формы обратной связи.</li>
                <li>Обращаться к Исполнителю по контактам, указанным на сайте.</li>
              </ul>
              <p className="mt-3 mb-1">Пользователь обязуется:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Предоставлять достоверную информацию при заполнении форм.</li>
                <li>Не использовать сайт в противоправных целях.</li>
                <li>Не нарушать права интеллектуальной собственности Исполнителя.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">4. Права и обязанности исполнителя</h2>
              <p className="mb-1">Исполнитель вправе:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Изменять содержимое сайта и настоящее Соглашение без предварительного уведомления.</li>
                <li>Отказать в обработке заявки без объяснения причин.</li>
                <li>Ограничить доступ к сайту в технических целях.</li>
              </ul>
              <p className="mt-3 mb-1">Исполнитель обязуется:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Обрабатывать персональные данные в соответствии с Политикой конфиденциальности и 152-ФЗ.</li>
                <li>Своевременно отвечать на заявки, поданные через форму.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">5. Ограничение ответственности</h2>
              <p>Исполнитель не несёт ответственности за временную недоступность сайта, убытки от использования или невозможности использования сайта, а также за результаты применения полученных консультаций, поскольку они носят информационный характер.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">6. Интеллектуальная собственность</h2>
              <p>Все материалы сайта — тексты, изображения, логотип, дизайн, код — принадлежат Исполнителю. Копирование и использование без письменного разрешения запрещено.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">7. Порядок разрешения споров</h2>
              <p>Споры стороны стремятся урегулировать путём переговоров. При недостижении согласия — в суде по месту нахождения Исполнителя в соответствии с законодательством РФ.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">8. Персональные данные</h2>
              <p>Обработка персональных данных осуществляется в соответствии с <a href="/policy" className="text-navy underline hover:no-underline">Политикой конфиденциальности</a>, являющейся неотъемлемой частью настоящего Соглашения.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-2">9. Заключительные положения</h2>
              <p>Соглашение вступает в силу с момента начала использования сайта. Актуальная редакция всегда доступна по адресу sellershelp.ru/terms. Продолжение использования сайта после изменений означает согласие с обновлённой редакцией.</p>
            </section>

            <section className="border-t pt-6">
              <h2 className="text-lg font-semibold text-navy mb-2">Контакты</h2>
              <p>ИП Зуев Юрий Васильевич, ИНН 772314579555</p>
              <p>Email: <a href="mailto:ssellershelp@ya.ru" className="text-navy underline hover:no-underline">ssellershelp@ya.ru</a></p>
              <p>Телефон: <a href="tel:+79932580300" className="text-navy underline hover:no-underline">+7 993 258 03 00</a></p>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
