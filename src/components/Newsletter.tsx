import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <section className="relative py-32 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000" 
          alt="Glitter Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            First Time <span className="italic">Here?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 uppercase tracking-[0.2em]">
            We are pleased to offer you <br />
            <span className="text-honey text-4xl font-serif mt-2 block">10% Discount</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-white text-[12px] tracking-widest focus:outline-none focus:border-honey transition-colors"
            />
            <button className="bg-rosegold text-white px-10 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-honey hover:text-zinc-900 transition-all duration-300">
              Submit
            </button>
          </div>
          <p className="mt-6 text-[10px] text-zinc-500 uppercase tracking-widest">
            Discount is valid on your first purchase
          </p>
        </motion.div>
      </div>
    </section>
  );
}
