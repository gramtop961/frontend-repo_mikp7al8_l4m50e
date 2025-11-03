import { Rocket, Shield, Phone, Store } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
            <Rocket size={18} />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">ForgeMC Studio</div>
            <div className="text-xs text-black/60">Minecraft Plugins & Dev</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Цены</a>
          <a href="#portfolio" className="hover:text-indigo-600 transition-colors">Работы</a>
          <a href="#policies" className="hover:text-indigo-600 transition-colors">Политики</a>
          <a href="#contacts" className="hover:text-indigo-600 transition-colors flex items-center gap-1"><Phone size={16}/>Контакты</a>
          <a href="#shop" className="ml-2 inline-flex items-center gap-2 rounded-lg border border-black/[0.08] px-3 py-1.5 hover:bg-black/[0.03] transition-colors">
            <Store size={16}/> Магазин плагинов
          </a>
        </nav>
        <a href="#pricing" className="md:hidden inline-flex items-center gap-2 rounded-lg border border-black/[0.08] px-3 py-1.5 hover:bg-black/[0.03] transition-colors">
          <Shield size={16}/> Заказать
        </a>
      </div>
    </header>
  );
}
