import { motion } from 'framer-motion';
import { Smartphone, Tv, Film } from 'lucide-react';

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for each line
const lineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

// Animation variants for each character
const charVariants = {
  hidden: { 
    opacity: 0, 
    x: -10,
    y: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
  },
};

// New variants for the subtext with slower timing
const subtextContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.2, // Increased delay before starting
      staggerChildren: 0.08, // Increased delay between words
    },
  },
};

const subtextCharVariants = {
  hidden: { 
    opacity: 0, 
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80, // Reduced stiffness for slower movement
      duration: 0.5, // Added duration for slower animation
    }
  },
};

export default function Hero() {
  // Split title into lines
  const titleLines = [
    "Track and Rank",
    "Your Favorites",
    "with Take2"
  ];

  const subtextContent = "Discover, rank, and keep a record of all your favorite movies and TV shows with Take2, the ultimate tracker app.";

  // Split text into words instead of characters
  const subtextWords = subtextContent.split(" ");

  return (
    <div className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3D0C0C] via-[#2A0808] to-[#1A0505]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4A0F0F]/40 to-transparent blur-[80px] animate-slow-drift" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#2A0808]/30 to-transparent blur-[60px] animate-slow-drift-reverse" />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FF2E2E]/5 to-transparent blur-[40px] mix-blend-overlay animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-l from-[#FF2E2E]/5 to-transparent blur-[40px] mix-blend-overlay animate-pulse-slow delay-1000" />
        </div>
        
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight uppercase tracking-wide"
            >
              {titleLines.map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  variants={lineVariants}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {line.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={charVariants}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={subtextContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-red-200 mb-8 leading-relaxed overflow-hidden"
            >
              <div className="flex flex-wrap justify-center lg:justify-start">
                {subtextWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={subtextCharVariants}
                    className="inline-block"
                  >
                    {word}
                    {index !== subtextWords.length - 1 && "\u00A0"} {/* Add space between words */}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 2.5,
                duration: 0.8
              }}
              className="flex justify-center lg:justify-start w-full"
            >
              <a 
                href="https://forms.gle/dkCDNnrxQ7eyHdyr9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-4 bg-[#c10010] hover:bg-[#a1000d] text-white rounded-full text-lg font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:border-red-500 border-2 border-transparent shadow-lg shadow-red-900/30"
              >
                Download Beta!
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-[600px] w-full"
          >
            {/* Subtle, faint glow layers */}
            <div className="absolute -inset-10">
              {/* Primary red glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/10 rounded-full blur-[80px]" />
              {/* Secondary lighter glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-white/5 rounded-full blur-[50px] mix-blend-overlay" />
              {/* Additional soft red glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] bg-red-400/5 rounded-full blur-[60px]" />
            </div>
            
            {/* Image container */}
            <div className="relative">
              <img
                src="/screenshots/hero.png"
                alt="Take2 App Hero"
                className="w-full h-auto relative z-10"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { icon: Film, title: "Track Movies", desc: "Keep a record of your watched and wanted movies" },
            { icon: Tv, title: "Follow Shows", desc: "Never miss an episode of your favorite series" },
            { icon: Smartphone, title: "Mobile First", desc: "Take your watchlist anywhere with our mobile app" }
          ].map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-red-500/20 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-red-900/20"
            >
              <Icon className="w-12 h-12 text-[#ff1a1a] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-red-200">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}