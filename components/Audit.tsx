'use client'
import { useState } from 'react'

export default function Audit() {
  const [form, setForm] = useState({ name: '', phone: '', platform: '' })
  const [sent, setSent] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [loading, setLoading] = useState(false)

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '')
    return cleaned.length >= 10 && cleaned.length <= 12
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setForm({...form, phone: value})
    if (phoneError && validatePhone(value)) {
      setPhoneError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validatePhone(form.phone)) {
      setPhoneError('Введите корректный номер телефона')
      return
    }
    setPhoneError('')
    setLoading(true)
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          marketplace: form.platform,
          revenue: '',
        }),
      })
      if (res.ok) {
        setSent(true)
      }
    } catch (error) {
      console.error('Ошибка отправки:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-navy" id="audit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Не знаете с чего начать?
            <span className="text-amber block mt-1">Начните с честного разговора.</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10 leading-relaxed">
            Оставьте заявку — наш помощник уточнит детали вашей ситуации, и специалист свяжется с вами уже подготовленным. Никаких общих вопросов и шаблонных предложений — сразу по делу.
          </p>
          <p className="text-blue-300 text-sm mb-10">
            В рамках бесплатного аудита разберём ваш кабинет и честно скажем что работает, что мешает продажам и что можно улучшить прямо сейчас.
          </p>

          {sent ? (
            <div className="bg-white/10 rounded-2xl p-10 text-white">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">Заявка получена!</h3>
              <p className="text-blue-200">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-left shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Александр"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 999 000 00 00"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                      phoneError ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-navy'
                    }`}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Площадка</label>
                  <select
                    required
                    value={form.platform}
                    onChange={e => setForm({...form, platform: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors bg-white"
                  >
                    <option value="">Выберите...</option>
                    <option>Wildberries</option>
                    <option>Ozon</option>
                    <option>Яндекс Маркет</option>
                    <option>Несколько площадок</option>
                    <option>Ещё не выбрал</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber text-white font-bold py-4 rounded-xl text-lg hover:bg-amber-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Отправляем...' : 'Получить бесплатный аудит →'}
              </button>
              <p className="text-xs text-gray-400 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
