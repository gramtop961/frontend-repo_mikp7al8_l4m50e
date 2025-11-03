import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Policies from './components/Policies';

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Header />
      <main>
        <Hero />
        {/* Portfolio placeholder section visually styled as a teaser of cards */}
        <section id="portfolio" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Примеры работ</h2>
                <p className="mt-2 text-black/70 max-w-2xl">Ниже — демонстрация стилевых карточек. Подмените скриншотами ваших плагинов, GUI, экономических систем и мини-игр.</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white">
                  <div className="aspect-[16/10] bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100" />
                  <div className="p-4">
                    <div className="font-medium">Плагин #{i}: Кастомные механики</div>
                    <div className="text-sm text-black/70">Paper 1.20+ • Оптимизировано • Команды/GUI</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Pricing />
        <Policies />
      </main>
      <footer className="border-t border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} ForgeMC Studio. Все права защищены.</div>
          <div className="flex items-center gap-4">
            <a href="#policies" className="hover:text-indigo-600">Оферта</a>
            <a href="#policies" className="hover:text-indigo-600">Конфиденциальность</a>
            <a href="#policies" className="hover:text-indigo-600">Возврат</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
