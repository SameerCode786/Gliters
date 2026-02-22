import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
          alt="Glitter Swirls" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-[12px] uppercase tracking-[0.3em] text-rosegold font-semibold mb-4">
            UK Shipping | 3–5 Days
          </span>
          <h2 className="font-serif text-[32px] md:text-[64px] leading-[1.1] text-zinc-900 mb-6">
            Handmade Sparkle, <br />
            <span className="italic">Crafted for You</span>
          </h2>
          <p className="text-zinc-600 text-[16px] mb-8 max-w-lg leading-relaxed">
            Glitter & Glow: Premium Snow Globe Tumblers. Bespoke custom designs made with love in our UK studio.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-zinc-900 text-white px-10 py-4 text-[14px] font-bold uppercase tracking-widest hover:bg-rosegold transition-all duration-300 shadow-lg">
              Shop Collection
            </button>
            <button className="border border-zinc-200 bg-white/50 backdrop-blur-sm text-zinc-900 px-10 py-4 text-[14px] font-bold uppercase tracking-widest hover:border-rosegold transition-all duration-300">
              Custom Order
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] hidden lg:block"
      >
        <div className="relative w-full h-full p-12">
          <div className="absolute inset-0 border-[20px] border-white/40 rounded-full blur-3xl" />
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000" 
            alt="Premium Tumbler" 
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}
