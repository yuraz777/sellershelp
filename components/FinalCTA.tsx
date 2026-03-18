export default function FinalCTA() {
  return (
    <section className="py-20 bg-gray-light" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">
            Маркетплейс не терпит паузы.
            <span className="text-navy block mt-2">Но одно правильное решение меняет всё.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Оставьте заявку — уточним детали и предложим конкретное решение для вашей ситуации. Без лишних слов и затянутых переговоров.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#audit" className="btn-primary text-lg px-10 py-4">
              Оставить заявку →
            </a>
            <a href="tel:+79052836479" className="btn-outline text-lg px-10 py-4">
              +7 905 283 64 79
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            или напишите нам на{' '}
            <a href="mailto:ssellershelp@ya.ru" className="text-navy hover:underline">
              ssellershelp@ya.ru
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
