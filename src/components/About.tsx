import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[12px] uppercase tracking-[0.4em] text-rosegold font-semibold mb-4">
              What you need to know
            </h3>
            <h2 className="font-serif text-[20px] text-zinc-900 mb-8 leading-tight">
              About Us <span className="italic">& Our Craft</span>
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-10 text-[16px]">
              At Glitter&Glow, we believe every sip should be a celebration. Our handmade snow globe tumblers are meticulously crafted in the UK using premium materials and ethically sourced glitter. Each piece is a unique work of art, designed to bring a touch of magic to your daily routine.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-zinc-200 pt-10">
              <div>
                <p className="text-3xl font-serif text-rosegold mb-1">680+</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Instagram Followers</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-rosegold mb-1">1.2k</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-rosegold mb-1">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Handmade</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="Crafting Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-honey p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="font-serif text-4xl text-zinc-900">-20%</p>
              <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-800">For all first orders</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
