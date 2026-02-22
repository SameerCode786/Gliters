import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="lg:hidden p-2">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-500">
            <a href="#" className="hover:text-rosegold transition-colors">Home</a>
            <a href="#" className="hover:text-rosegold transition-colors">Collections</a>
            <a href="#" className="hover:text-rosegold transition-colors">Bespoke</a>
            <a href="#" className="hover:text-rosegold transition-colors">About</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-serif text-2xl tracking-[0.1em] font-bold text-zinc-900">
            GLITTER<span className="text-rosegold">&</span>GLOW
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400 mr-4">
            <Instagram className="w-3 h-3" />
            <span>680+ Followers</span>
          </div>
          <button className="p-2 hover:text-rosegold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 relative hover:text-rosegold transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-rosegold text-white text-[9px] flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
