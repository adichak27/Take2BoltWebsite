import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed w-full z-50 px-4 pt-4">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="mx-auto max-w-7xl bg-gradient-to-r from-[#2a0002] via-[#420005] to-[#2a0002] rounded-2xl shadow-lg shadow-red-950/50 border border-red-900/20"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo section with hover animation */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-gradient-to-br from-[#420005] via-[#3a0003] to-[#2a0002] rounded-xl shadow-lg"
              >
                <Film className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">Take2</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'About', 'Contact'].map((item) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-4 py-2 text-gray-200 hover:text-[#ff1a1a] transition-all duration-300
                           border border-transparent hover:border-red-500/50
                           rounded-lg
                           hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]
                           hover:bg-red-950/20"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                href="https://forms.gle/dkCDNnrxQ7eyHdyr9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#c10010] hover:bg-[#a1000d] text-white rounded-full font-semibold transition-all hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:border-red-500 border-2 border-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Join Beta
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}