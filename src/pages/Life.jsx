import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { lifeConfig } from '../config/lifeConfig';

const Life = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="w-full">
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
            {lifeConfig.photos.map((photo, index) => (
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
            {lifeConfig.blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass rounded-xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-1" />
                    {post.date}
                  </div>
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
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary/30 pb-2">Travel Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifeConfig.travelLocations.map((location) => (
              <div key={location.id} className="glass p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <FiMapPin className="text-primary mr-2" />
                  <span className="font-semibold">{location.name}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FiCalendar className="mr-1" />
                  {location.date}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Life;