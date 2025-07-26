import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiGlobe } from 'react-icons/fi';

const Contact = () => {
  const { t } = useTranslation();

  // Contact information data
  const contactInfo = {
    email: 'john.doe@university.edu',
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    googleScholar: 'https://scholar.google.com/citations?user=abc123',
    website: 'https://username.com',
    address: 'Department of Computer Science, XYZ University, 123 Academic St, City, Country',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086870866343!2d144.9559283153153!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57730d72f9579a3!2sUniversity%20of%20Melbourne!5e0!3m2!1sen!2sus!4v1678900000000!5m2!1sen!2sus'
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          {t('nav.contact')}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">{t('common.contact_information')}</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('common.email')}</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FiMapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('common.address')}</h3>
                  <p className="text-gray-700">{contactInfo.address}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <h3 className="font-semibold text-lg mb-4">{t('common.social_links')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiGithub className="text-gray-700" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiLinkedin className="text-gray-700" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={contactInfo.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiGlobe className="text-gray-700" />
                    <span>{t('common.google_scholar')}</span>
                  </a>
                  <a
                    href={contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiGlobe className="text-gray-700" />
                    <span>{t('common.website')}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6">{t('common.location')}</h2>
            <div className="aspect-video rounded-lg overflow-hidden border border-white/30">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
            <div className="mt-6 p-4 bg-white/20 rounded-lg">
              <p className="text-gray-700 italic">
                {t('common.office_hours')}: Monday-Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;