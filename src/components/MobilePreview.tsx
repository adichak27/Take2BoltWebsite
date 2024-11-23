import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
    <div id="preview" className="py-24 bg-gradient-to-b from-black to-[#1a0001]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.4, 0.25, 1] // Custom easing curve
            }
          }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.2
              }
            }}
            viewport={{ once: false }}
            className="text-4xl font-bold text-white mb-4"
          >
            A Sneak Peek at Our Mobile App
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.4
              }
            }}
            viewport={{ once: false }}
            className="text-xl text-red-200 max-w-2xl mx-auto"
          >
            Discover what your friends are watching and explore their latest reviews and recommendations. Stay connected through shared favorites, recent finds, and honest ratings. Take2 makes it easy to find inspiration from the people who know your taste best!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.9,
            y: 60
          }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1]
            }
          }}
          viewport={{ once: false }}
          className="relative swiper-container"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            spaceBetween={50}
            loop={true}
            navigation={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="w-full max-w-[1400px] mx-auto py-16"
          >
            {screenshots.map((screenshot, index) => (
              <SwiperSlide
                key={index}
                className="w-[350px] bg-transparent"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40, rotateY: -20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.1 * index,
                      ease: [0.25, 0.4, 0.25, 1]
                    }
                  }}
                  viewport={{ once: false }}
                  className="relative w-[350px] h-[700px] rounded-[3rem] overflow-hidden bg-black border-8 border-gray-800 shadow-xl shadow-red-900/20"
                >
                  {/* iPhone Notch */}
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-7 w-36 bg-black rounded-b-2xl z-20" />
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
                    <img
                      src={screenshot.url}
                      alt={screenshot.alt}
                      className={`w-full h-[103%] object-cover ${
                        screenshot.url.includes('Screen4') 
                          ? 'object-center -mt-5'
                          : 'object-top -mt-4'
                      }`}
                    />
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.4, 0.25, 1]
            }
          }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <motion.a 
            href="https://forms.gle/dkCDNnrxQ7eyHdyr9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-[#c10010] hover:bg-[#a1000d] text-white rounded-full font-semibold transition-all transform hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:border-red-500 border-2 border-transparent"
          >
             Download Beta!
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}