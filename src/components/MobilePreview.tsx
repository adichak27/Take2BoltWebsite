import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const screenshots = [
  {
    url: "/Take2BoltWebsite/screenshots/Screen1.png",
    alt: "Description of screen 1"
  },
  {
    url: "/Take2BoltWebsite/screenshots/Screen2.png",
    alt: "Description of screen 2"
  },
  {
    url: "/Take2BoltWebsite/screenshots/Screen3.png",
    alt: "Description of screen 3"
  },
  {
    url: "/Take2BoltWebsite/screenshots/Screen4.png",
    alt: "Description of screen 4"
  },
  {
    url: "/Take2BoltWebsite/screenshots/Screen5.png",
    alt: "Description of screen 5"
  },
  {
    url: "/Take2BoltWebsite/screenshots/Screen6.png",
    alt: "Description of screen 6"
  },
  {
    url: "/Take2BoltWebsite/screenshots/Screen7.png",
    alt: "Description of screen 7"
  }
];

export default function MobilePreview() {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-[#1a0001]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">A Sneak Peek at Our Mobile App</h2>
          <p className="text-xl text-red-200 max-w-2xl mx-auto">
            Discover what your friends are watching and explore their latest reviews and recommendations. Stay connected through shared favorites, recent finds, and honest ratings. Take2 makes it easy to find inspiration from the people who know your taste best!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
          
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-12"
          >
            {screenshots.map((screenshot, index) => (
              <SwiperSlide
                key={index}
                className="w-[300px] bg-transparent"
              >
                <div className="relative w-[300px] h-[600px] rounded-[3rem] overflow-hidden bg-black border-8 border-gray-800 shadow-xl shadow-red-900/20">
                  {/* iPhone Notch - slightly taller and repositioned */}
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-7 w-36 bg-black rounded-b-2xl z-20" />
                  
                  {/* Screen Content - removed padding */}
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
                    <img
                      src={screenshot.url}
                      alt={screenshot.alt}
                      className="w-full h-[103%] object-cover object-top -mt-3"
                    />
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <a 
            href="https://forms.gle/dkCDNnrxQ7eyHdyr9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#c10010] hover:bg-[#a1000d] text-white rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:border-red-500 border-2 border-transparent"
          >
            Join the Beta Today!
          </a>
        </motion.div>
      </div>
    </div>
  );
}