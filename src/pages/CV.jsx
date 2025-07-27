import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { cvConfig } from '../config/cvConfig';

const CV = () => {
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
          {t('nav.cv')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass p-8 md:p-12 rounded-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">{cvConfig.basicInfo.name}</h2>
            <p className="text-xl text-gray-700 mb-6">{cvConfig.basicInfo.title}</p>
            <a
              href={cvConfig.basicInfo.cvFile}
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FiDownload className="mr-2" /> {t('common.download_cv')}
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary border-b border-primary/30 pb-2">Education</h3>
              <div className="space-y-4">
                {cvConfig.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold">{edu.degree}</p>
                    <p>{edu.institution}, {edu.period}</p>
                    <p className="text-sm text-gray-600">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary border-b border-primary/30 pb-2">Skills</h3>
              <div className="space-y-4">
                {cvConfig.skills.map((skill, index) => (
                  <div key={index}>
                    <p className="font-semibold">{skill.category}</p>
                    <p>{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-primary border-b border-primary/30 pb-2">Selected Publications</h3>
            <ul className="space-y-2 text-sm">
              {cvConfig.publications.map((pub, index) => (
                <li key={index}>{pub}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;