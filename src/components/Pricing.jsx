import { Check, Crown, Settings2 } from 'lucide-react';

const tiers = [
  {
    name: 'Старт',
    price: 'от 2 900₽',
    tagline: 'Небольшие правки и простые механики',
    features: [
      'Малый объём (до 6 часов)',
      'Документация по установке',
      'Исправление багов 7 дней',
    ],
  },
  {
    name: 'Проект',
    price: 'от 9 900₽',
    tagline: 'Полноценный плагин под задачу',
    highlighted: true,
    features: [
      'Средний объём (до 24 часов)',
      'Архитектура и код-ревью',
      'Поддержка и обновления 30 дней',
    ],
  },
  {
    name: 'Enterprise',
    price: 'от 29 000₽',
    tagline: 'Сложные системы и интеграции',
    features: [
      'Большой объём (от 24 часов)',
      'Интеграции API/Базы данных',
      'Приоритетная поддержка SLA',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs text-black/70">
            <Settings2 size={14}/> Тарифы
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Прозрачные цены</h2>
          <p className="mt-2 text-black/70">Оплата по этапам. Фиксируем требования и сроки перед стартом.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.highlighted ? 'border-indigo-300 bg-gradient-to-b from-indigo-50 to-white' : 'border-black/[0.08] bg-white'} p-6`}> 
              {tier.highlighted && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-indigo-600 text-white text-xs px-2 py-1 shadow">
                  <Crown size={14}/> Топ выбор
                </div>
              )}
              <div className="text-sm text-black/60">{tier.name}</div>
              <div className="mt-1 text-3xl font-semibold">{tier.price}</div>
              <div className="mt-1 text-sm text-black/70">{tier.tagline}</div>
              <ul className="mt-5 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="text-emerald-600 shrink-0" size={16}/>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacts" className={`mt-6 inline-flex w-full items-center justify-center h-11 rounded-lg border ${tier.highlighted ? 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700' : 'border-black/[0.08] hover:bg-black/[0.03]'} transition-colors`}>
                Оставить заявку
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
