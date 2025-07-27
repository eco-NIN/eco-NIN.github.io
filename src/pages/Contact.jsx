import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiGlobe } from 'react-icons/fi';
import { contactConfig } from '../config/contactConfig';

const Contact = () => {
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
                  <a href={`mailto:${contactConfig.contactInfo.email}`} className="text-gray-700 hover:text-primary transition-colors">
                    {contactConfig.contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FiMapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('common.address')}</h3>
                  <p className="text-gray-700">{contactConfig.contactInfo.address}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <h3 className="font-semibold text-lg mb-4">{t('common.social_links')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={contactConfig.contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiGithub className="text-gray-700" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={contactConfig.contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiLinkedin className="text-gray-700" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={contactConfig.contactInfo.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiGlobe className="text-gray-700" />
                    <span>{t('common.google_scholar')}</span>
                  </a>
                  <a
                    href={contactConfig.contactInfo.website}
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
                src={contactConfig.contactInfo.mapUrl}
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