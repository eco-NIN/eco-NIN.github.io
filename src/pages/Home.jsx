import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt={t('home.photo_alt')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Yuzhe Guo
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                {t('home.title')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('home.intro')} My research interests include machine learning, natural language processing, and computer vision applications in healthcare. I am currently pursuing my PhD at XYZ University.
              </p>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>PhD in Computer Science, XYZ University (2020-Present)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>MSc in Artificial Intelligence, ABC Institute (2018-2020)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>BSc in Computer Engineering, DEF College (2014-2018)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Awards & Honors</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Best Paper Award, International Conference on AI (2022)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>University Merit Scholarship (2020-2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Outstanding Graduate Award (2020)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

  export default Home;