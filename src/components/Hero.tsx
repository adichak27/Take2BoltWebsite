import { motion } from 'framer-motion';
import { Smartphone, Tv, Film } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2a0002] via-[#420005] to-[#1a0001]">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#3a0003] opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Track and Rank Your Favorites with Take2
            </h1>
            <p className="text-xl text-red-200 mb-8">
              Discover, rank, and keep a record of all your favorite movies and TV shows with Take2, the ultimate tracker app.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <a 
                href="https://forms.gle/dkCDNnrxQ7eyHdyr9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#c10010] hover:bg-[#a1000d] text-white rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:border-red-500 border-2 border-transparent shadow-lg shadow-red-900/30"
              >
                Sign up for our beta release!
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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