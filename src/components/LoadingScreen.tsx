import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-[#2a0002] via-[#420005] to-[#1a0001] flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="relative"
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity
          }}
          className="absolute -inset-12 rounded-full border-t-2 border-r-2 border-red-500/30"
        />
        
        {/* Inner rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity
          }}
          className="absolute -inset-8 rounded-full border-t-2 border-l-2 border-red-500/50"
        />

        {/* Logo container */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative z-10 bg-gradient-to-br from-[#420005] to-[#2a0002] p-4 rounded-xl shadow-lg"
        >
          <Film className="w-12 h-12 text-white" />
        </motion.div>

        {/* Glowing effect */}
        <div className="absolute inset-0 -z-10 bg-red-500/20 blur-xl rounded-full scale-150" />
      </motion.div>
    </motion.div>
  );
}