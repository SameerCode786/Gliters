import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative w-32 h-32 mb-4">
            {/* Honey Pot Icon */}
            <div className="text-6xl flex items-center justify-center">🍯</div>
            
            {/* Glitter Fill Animation */}
            <motion.div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 bg-honey/40 overflow-hidden rounded-b-lg"
              style={{ height: `${progress * 0.6}px` }}
            >
              <motion.div 
                animate={{ 
                  x: [-20, 20, -20],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full h-full bg-honey shadow-[0_0_15px_rgba(255,215,0,0.8)]"
              />
            </motion.div>
          </div>
          
          <div className="w-48 h-1 bg-zinc-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-honey"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 font-serif italic text-rosegold tracking-widest text-sm uppercase">
            Crafting Sparkle...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
