import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface StarProps {
  delay: number;
  key?: number | string;
}

const Star = ({ delay }: StarProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0], 
      scale: [0.5, 1.2, 0.5],
      rotate: [0, 45, 0]
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute text-rosegold text-lg pointer-events-none"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
  >
    ✨
  </motion.span>
);

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => setIsVisible(false), 1200);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFCFB]"
        >
          {/* Background Silk Texture / Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-50 via-white to-zinc-50 opacity-50" />

          <div className="relative mb-12">
            {/* Twinkling Stars */}
            <div className="absolute -inset-12">
              {[0, 0.5, 1, 1.5, 2].map((d) => (
                <Star key={d} delay={d} />
              ))}
            </div>

            {/* Brand Logo Outline */}
            <div className="relative">
              <h1 className="font-serif text-4xl md:text-5xl tracking-[0.2em] text-zinc-200 uppercase select-none">
                GLITTER<span className="text-zinc-100">&</span>GLOW
              </h1>
              
              {/* Swirling Sparkle Wave Fill */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                style={{ height: `${progress}%`, bottom: 0, top: 'auto' }}
              >
                <h1 className="font-serif text-4xl md:text-5xl tracking-[0.2em] text-rosegold uppercase select-none">
                  GLITTER<span className="text-rosegold-light">&</span>GLOW
                </h1>
                
                {/* Wave Animation */}
                <motion.div 
                  animate={{ 
                    x: ["-100%", "100%"],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                />
              </motion.div>

              {/* Shine Streak Effect on Completion */}
              {isComplete && (
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "200%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white to-transparent w-20 skew-x-[35deg]"
                />
              )}
            </div>
          </div>
          
          {/* Thin Loading Bar */}
          <div className="relative w-64 h-[1px] bg-zinc-100 overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-rosegold shadow-[0_0_8px_rgba(183,110,121,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 font-serif italic text-rosegold/60 tracking-[0.3em] text-[10px] uppercase"
          >
            London Boutique
          </motion.p>

          {/* Split Exit Effect (Top/Bottom Panes) */}
          <AnimatePresence>
            {!isVisible && (
              <>
                <motion.div 
                  initial={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  className="fixed inset-x-0 top-0 h-1/2 bg-[#FDFCFB] z-[101]"
                />
                <motion.div 
                  initial={{ y: 0 }}
                  exit={{ y: "100%" }}
                  className="fixed inset-x-0 bottom-0 h-1/2 bg-[#FDFCFB] z-[101]"
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
