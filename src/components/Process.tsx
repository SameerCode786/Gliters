import { motion } from "motion/react";
import { Pencil, Layers, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Design",
    description: "We sketch and plan the custom glitter blend for each tumbler.",
    icon: Pencil,
    color: "bg-rosegold/5"
  },
  {
    id: "02",
    title: "Craft",
    description: "Carefully layering glitter and solution for that perfect flow.",
    icon: Layers,
    color: "bg-honey/5"
  },
  {
    id: "03",
    title: "Seal",
    description: "Ensuring a leak-proof finish with premium materials.",
    icon: ShieldCheck,
    color: "bg-zinc-50"
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] uppercase tracking-[0.4em] text-zinc-400 font-semibold mb-4"
          >
            Our Method
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[32px] md:text-[48px] text-zinc-900"
          >
            The Handmade <span className="italic">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative p-10 rounded-3xl border border-zinc-100 hover:border-rosegold/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(183,110,121,0.1)]"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <step.icon className="w-6 h-6 text-rosegold" />
                  </div>
                  <span className="font-serif text-5xl text-zinc-100 group-hover:text-rosegold/10 transition-colors duration-500 select-none">
                    {step.id}
                  </span>
                </div>

                <h4 className="font-serif text-2xl text-zinc-900 mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h4>
                <p className="text-zinc-500 leading-relaxed text-[15px] group-hover:text-zinc-700 transition-colors duration-500">
                  {step.description}
                </p>

                <div className="mt-8 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-rosegold to-transparent transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
