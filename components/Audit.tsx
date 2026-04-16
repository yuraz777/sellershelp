'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Audit() {
  const [form, setForm] = useState({ name: '', phone: '', platform: '' })
  const [phoneError, setPhoneError] = useState('')
  const [consentPd, setConsentPd] = useState(false)
  const [consentMarketing, setConsentMarketing] = useState(false)
  const [consentError, setConsentError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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
    if (!consentPd) {
      setConsentError('Необходимо дать согласие на обработку персональных данных')
      return
    }
    setPhoneError('')
    setConsentError('')
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
          consentMarketing,
        }),
      })
      if (res.ok) {
        if (typeof window !== 'undefined' && (window as any).ym) {
          ;(window as any).ym(108514497, 'reachGoal', 'form_submit')
        }
        router.push('/thank-you')
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

            <div className="mb-5 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={consentPd}
                    onChange={e => {
                      setConsentPd(e.target.checked)
                      if (e.target.checked) setConsentError('')
                    }}
                    className="sr-only peer"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                    ${consentPd ? 'bg-navy border-navy' : consentError ? 'border-red-400 bg-white' : 'border-gray-300 bg-white'}`}>
                    {consentPd && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                  <a href="/policy" target="_blank" className="text-navy underline hover:no-underline">Политикой конфиденциальности</a>{' '}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={consentMarketing}
                    onChange={e => setConsentMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                    ${consentMarketing ? 'bg-navy border-navy' : 'border-gray-300 bg-white'}`}>
                    {consentMarketing && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-600 leading-relaxed">
                  Я согласен получать полезные материалы и специальные предложения от SellersHelp (необязательно)
                </span>
              </label>

              {consentError && (
                <p className="text-red-500 text-xs">{consentError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber text-white font-bold py-4 rounded-xl text-lg hover:bg-amber-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Отправляем...' : 'Получить бесплатный аудит →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
