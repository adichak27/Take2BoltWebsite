import { motion } from 'framer-motion';
import { ThumbsUp, Star, ListChecks, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: ThumbsUp,
    title: "Compare and Rank Your Favorites",
    description: "Easily build your ultimate movie list by choosing between two favorites at a time. Swipe right for better, and left for worse. Over time, watch your personalized ranking grow with every choice you make!",
    image: "/Take2BoltWebsite/screenshots/Screen4.png",
    alt: "Movie comparison interface"
  },
  {
    icon: Star,
    title: "All the Details in One Place",
    description: "Get a complete view of any movie and show—all in one place. See cast details, streaming availability, a quick synopsis, and even which friends have watched and rated it. Make decisions faster with everything you need at a glance.",
    image: "/Take2BoltWebsite/screenshots/Screen3.png",
    alt: "Movie details screen"
  },
  {
    icon: ListChecks,
    title: "Organize Your Watchlists",
    description: "Effortlessly organize everything you've watched and plan to watch. Create separate lists for completed shows and upcoming titles, so you'll never forget what's next. Keep your watchlist neatly sorted and easily accessible, all in one app.",
    image: "/Take2BoltWebsite/screenshots/Screen5.png",
    alt: "Watchlist organization"
  },
  {
    icon: Users,
    title: "See What Friends Are Watching",
    description: "Discover what your friends are watching and explore their latest reviews and recommendations. Stay connected through shared favorites, recent finds, and honest ratings. Take2 makes it easy to find inspiration from the people who know your taste best!",
    image: "/Take2BoltWebsite/screenshots/Screen2.png",
    alt: "Social features interface"
  },
  {
    icon: TrendingUp,
    title: "Discover What's Trending Now",
    description: "Stay up-to-date with the latest trending movies and shows, all in one place. Discover what everyone's talking about and find your next favorite binge-worthy title. Dive into the hottest picks and never miss a moment of what's new and popular!",
    image: "/Take2BoltWebsite/screenshots/Screen1.png",
    alt: "Trending content screen"
  }
];

export default function Features() {
  return (
    <div className="bg-gradient-to-b from-[#1a0001] to-black">
      {features.map((feature, index) => (
        <motion.section
          key={feature.title}
          className={`py-24 ${index % 2 === 0 ? 'bg-black/30' : ''}`}
        >
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                  <div className="bg-gradient-to-br from-[#420005] to-[#2a0002] p-4 rounded-xl shadow-lg shadow-red-900/20">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-lg text-red-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <div className="relative w-[300px] h-[600px] mx-auto rounded-[3rem] overflow-hidden bg-black border-8 border-gray-800 shadow-xl shadow-red-900/20">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-40 bg-black rounded-b-2xl z-20" />
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}