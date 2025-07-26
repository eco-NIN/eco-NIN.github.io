import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

const Life = () => {
  const { t } = useTranslation();

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Conference Experience: ICML 2023',
      excerpt: 'Sharing my experience presenting research at the International Conference on Machine Learning in Honolulu.',
      date: 'July 15, 2023',
      image: 'https://via.placeholder.com/400x250?text=ICML+2023',
    },
    {
      id: 2,
      title: 'PhD Journey: Year 3 Reflections',
      excerpt: 'Lessons learned and challenges overcome during the third year of my doctoral studies.',
      date: 'May 2, 2023',
      image: 'https://via.placeholder.com/400x250?text=PhD+Journey',
    },
    {
      id: 3,
      title: 'Balancing Research and Personal Life',
      excerpt: 'Strategies I use to maintain work-life balance while pursuing academic research.',
      date: 'March 18, 2023',
      image: 'https://via.placeholder.com/400x250?text=Work+Life+Balance',
    },
  ];

  // Travel locations data
  const travelLocations = [
    { id: 1, name: 'Honolulu, USA', date: 'July 2023', lat: 21.3069, lng: -157.8583 },
    { id: 2, name: 'Tokyo, Japan', date: 'May 2023', lat: 35.6762, lng: 139.6503 },
    { id: 3, name: 'Paris, France', date: 'January 2023', lat: 48.8566, lng: 2.3522 },
    { id: 4, name: 'Sydney, Australia', date: 'September 2022', lat: -33.8688, lng: 151.2093 },
  ];

  // Photo gallery data
  const photos = [
    'https://via.placeholder.com/400x400?text=Photo+1',
    'https://via.placeholder.com/400x400?text=Photo+2',
    'https://via.placeholder.com/400x400?text=Photo+3',
    'https://via.placeholder.com/400x400?text=Photo+4',
    'https://via.placeholder.com/400x400?text=Photo+5',
    'https://via.placeholder.com/400x400?text=Photo+6',
    'https://via.placeholder.com/400x400?text=Photo+7',
    'https://via.placeholder.com/400x400?text=Photo+8',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          {t('nav.life')}
        </motion.h1>

        {/* Photo Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary/30 pb-2">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Posts Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary/30 pb-2">Recent Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="glass overflow-hidden flex flex-col h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FiCalendar className="mr-1" /> {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 flex-grow">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <button className="text-primary hover:underline mt-auto self-start">
                    Read more →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Travel Map Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary/30 pb-2">Travel Map</h2>
          <div className="glass p-4 rounded-xl">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
              {/* Map placeholder */}
              <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                <p className="text-gray-500">Interactive Travel Map (placeholder)</p>
              </div>
              {/* Map markers */}
              <div className="absolute inset-0 p-4">
                {travelLocations.map((location, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${(index + 1) * 15}%`, top: `${(index + 1) * 18}%` }}
                  >
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform"></div>
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sm whitespace-nowrap transition-opacity">
                      {location.name} ({location.date})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Life;