import { Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-black to-[#1a0001] py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <motion.a
              href="https://www.instagram.com/theTake2app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full border-2 border-transparent hover:border-red-500 
                         bg-gradient-to-br from-[#420005] to-[#2a0002] 
                         hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]
                         transition-all"
            >
              <Instagram className="w-5 h-5 text-gray-200" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/company/take2-app/about/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full border-2 border-transparent hover:border-red-500 
                         bg-gradient-to-br from-[#420005] to-[#2a0002] 
                         hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]
                         transition-all"
            >
              <Linkedin className="w-5 h-5 text-gray-200" />
            </motion.a>
          </div>
          
          <p className="text-gray-400 text-sm">
            Copyright © 2024 Take2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 