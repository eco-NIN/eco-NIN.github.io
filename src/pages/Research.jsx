/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 01:21:17
 * @FilePath: /eco-NIN.github.io/src/pages/Research.jsx
 * @Descripttion: 
 */
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import { researchConfig } from '../config/researchConfig';

const Research = () => {
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
          {t('nav.research')}
        </motion.h1>

        {/* Research Directions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary/30 pb-2">Research Directions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {researchConfig.researchDirections.map((direction, index) => (
              <div key={index} className="glass p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-3 text-primary">{direction.title}</h3>
                <p className="text-gray-700">{direction.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Research Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary/30 pb-2">Research Projects</h2>
          {researchConfig.projects.map((project) => (
            <div key={project.id} className="glass p-6 rounded-xl mb-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>📅 {project.period}</div>
                <div>💰 {project.funding}</div>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Publications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary/30 pb-2">Publications</h2>
          <div className="space-y-6">
            {researchConfig.publications.map((pub) => (
              <div key={pub.id} className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-1">{pub.title}</h3>
                <p className="text-gray-700 mb-2">{pub.authors}</p>
                <p className="text-gray-600 mb-3">
                  {pub.journal ? pub.journal : pub.conference}, {pub.year}
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <FiExternalLink className="mr-1" /> DOI
                  </a>
                  {pub.bibtex && (
                    <button className="flex items-center text-secondary hover:underline">
                      <FiFileText className="mr-1" /> BibTeX
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Research;