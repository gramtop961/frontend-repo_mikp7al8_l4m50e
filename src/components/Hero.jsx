import { Star, Code, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-20%,#a78bfa40,transparent),radial-gradient(800px_400px_at_10%_-20%,#60a5fa50,transparent)]" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-3 py-1 text-xs text-black/70 backdrop-blur">
          <Star className="text-yellow-500" size={14}/> Сделаем ваш сервер незабываемым
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Индивидуальная разработка плагинов для Minecraft
        </h1>
        <p className="mt-5 text-lg md:text-xl text-black/70 max-w-2xl">
          Пишем быстрые и надёжные Bukkit/Paper плагины, настраиваем интеграции и создаём уникальные механики под ваш геймдизайн. Сроки, качество и поддержка — на первом месте.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-600 px-5 text-white hover:bg-indigo-700 transition-colors shadow-sm">
            Заказать разработку
          </a>
          <a href="#portfolio" className="inline-flex h-11 items-center justify-center rounded-lg border border-black/[0.08] bg-white px-5 hover:bg-black/[0.03] transition-colors">
            Примеры работ
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Feature icon={<Code size={18}/>} title="Чистый код" text="Строгие стандарты, читаемость и масштабируемость."/>
          <Feature icon={<ShieldCheck size={18}/>} title="Безопасность" text="Анти-эксплойты и проверенные зависимости."/>
          <Feature icon={<Zap size={18}/>} title="Производительность" text="Низкая нагрузка, оптимизированные события."/>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-black/[0.08] bg-white/70 backdrop-blur p-4">
      <div className="flex items-center gap-2 text-indigo-600">
        {icon}
        <div className="font-medium">{title}</div>
      </div>
      <div className="mt-1 text-sm text-black/70">{text}</div>
    </div>
  );
}
