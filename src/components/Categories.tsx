import { motion } from "motion/react";

const categories = [
  {
    title: "Classic Snow Globes",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800",
    label: "CLASSICS"
  },
  {
    title: "Holographic Swirls",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    label: "HOLOGRAPHIC"
  },
  {
    title: "Bespoke Designs",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    label: "CUSTOM"
  },
  {
    title: "Seasonal Magic",
    image: "https://images.unsplash.com/photo-1576733220027-39b493840e6b?auto=format&fit=crop&q=80&w=800",
    label: "SEASONAL"
  }
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[12px] uppercase tracking-[0.4em] text-zinc-400 font-semibold mb-4">
            Explore Collections
          </h3>
          <h2 className="font-serif text-[20px] text-zinc-900">
            Inspired by your <span className="italic">Passion</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="bg-white px-8 py-3 text-[12px] font-bold uppercase tracking-widest text-zinc-900 shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {cat.label}
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-xl">{cat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
