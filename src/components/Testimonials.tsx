import { motion } from "motion/react";
import { Quote, Play } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[12px] uppercase tracking-[0.4em] text-zinc-400 font-semibold mb-4">
            Be a part of our
          </h3>
          <h2 className="font-serif text-[20px] text-zinc-900">
            Community <span className="italic">& Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000" 
              alt="Community Video" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-2xl shadow-xl relative"
          >
            <Quote className="w-12 h-12 text-honey/20 absolute top-8 right-8" />
            <h3 className="font-serif text-3xl text-zinc-900 mb-6">
              They're <span className="italic">Happy</span>
            </h3>
            <p className="text-zinc-600 italic text-lg leading-relaxed mb-8">
              "I ordered a custom rose gold snow globe tumbler for my sister's birthday and she absolutely loved it! The glitter movement is so smooth and the quality is outstanding. UK shipping was super fast too!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" 
                  alt="Customer" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-bold text-zinc-900 text-sm">Muriel Turner</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">Verified Buyer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
