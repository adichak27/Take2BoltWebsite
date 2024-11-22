import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MobilePreview from './components/MobilePreview';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
    }

    return () => window.removeEventListener('load', () => setIsLoading(false));
  }, []);

  // Add slight delay before showing content to ensure smooth transition
  useEffect(() => {
    if (!isLoading) {
      // Small delay to ensure loading screen exit animation completes
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {showContent && (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Features />
            <MobilePreview />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}