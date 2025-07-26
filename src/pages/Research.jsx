import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFileText } from 'react-icons/fi';

const Research = () => {
  const { t } = useTranslation();

  // Research directions data
  const researchDirections = [
    {
      title: 'Machine Learning',
      description: 'Development of novel algorithms for deep learning and reinforcement learning applications in healthcare diagnostics.',
    },
    {
      title: 'Natural Language Processing',
      description: 'Cross-lingual transfer learning and domain adaptation for medical text analysis and information extraction.',
    },
    {
      title: 'Computer Vision',
      description: 'Multimodal fusion techniques for medical imaging and disease prediction using convolutional neural networks.',
    },
  ];

  // Research projects data
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Medical Diagnosis System',
      description: 'A deep learning framework for early detection of chronic diseases using electronic health records and imaging data.',
      period: '2022-Present',
      funding: 'National Science Foundation Grant #123456',
    },
    {
      id: 2,
      title: 'Cross-lingual Medical Knowledge Graph',
      description: 'Building a multilingual knowledge graph for integrating medical literature across different languages and regions.',
      period: '2021-2023',
      funding: 'Health Research Institute Grant',
    },
  ];

  // Publication data
  const publications = [
    {
      id: 1,
      title: 'Attention-based Deep Learning for Medical Image Analysis',
      authors: 'Doe, J., Smith, A., & Johnson, B.',
      journal: 'IEEE Journal of Biomedical and Health Informatics',
      year: 2023,
      doi: 'https://doi.org/10.1109/JBHI.2023.3245678',
      bibtex: true,
    },
    {
      id: 2,
      title: 'Multilingual Transfer Learning in Clinical NLP',
      authors: 'Doe, J., Lee, S., & Wang, H.',
      journal: 'Journal of the American Medical Informatics Association',
      year: 2022,
      doi: 'https://doi.org/10.1093/jamia/ocac123',
      bibtex: true,
    },
    {
      id: 3,
      title: 'Knowledge Graph Construction from Electronic Health Records',
      authors: 'Smith, A., Doe, J., & Brown, C.',
      conference: 'Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining',
      year: 2021,
      doi: 'https://doi.org/10.1145/3447548.3467250',
      bibtex: true,
    },
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
            {researchDirections.map((direction, index) => (
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
          {projects.map((project) => (
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
            {publications.map((pub) => (
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