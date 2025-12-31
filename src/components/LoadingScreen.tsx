import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  // 🔹 Simulated progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 4;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-white/10 rounded-full -top-24 -left-24"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full bottom-[-150px] right-[-150px]"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 bg-white/15 backdrop-blur-xl 
                   p-10 rounded-3xl shadow-2xl text-center max-w-sm w-full"
      >
        {/* Logo / Icon */}
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative inline-block mb-6"
        >
          {/* Replace this icon with <img src="/logo.png" /> if you have logo */}
          <ShoppingCart className="w-24 h-24 text-white" strokeWidth={1.5} />

          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute -top-2 -right-2 w-8 h-8 
                       bg-orange-400 rounded-full 
                       flex items-center justify-center text-white font-bold"
          >
            +
          </motion.span>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Angalamman Store
        </h1>

        <p className="text-white/90 text-lg mb-6">
          Fresh groceries loading...
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden mb-3">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        <p className="text-white text-sm font-semibold">
          {progress}%
        </p>
      </motion.div>
    </motion.div>
  );
}
