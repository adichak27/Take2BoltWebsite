import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed w-full z-50 px-4 pt-4">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="mx-auto max-w-7xl bg-gradient-to-r from-[#2a0002] via-[#420005] to-[#2a0002] rounded-2xl shadow-lg shadow-red-950/50 border border-red-900/20"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Simplified logo section */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="text-xl font-bold text-white">Take2</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Features', 'Preview'].map((item) => (
                <motion.a 
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item === 'Home') {
                      scrollToTop();
                    } else if (item === 'Preview') {
                      document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (item === 'Features') {
                      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
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
                Download Beta
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}