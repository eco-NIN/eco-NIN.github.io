import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const CV = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
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
            <h2 className="text-3xl font-bold mb-2">John Doe</h2>
            <p className="text-xl text-gray-700 mb-6">PhD Candidate in Computer Science</p>
            <a
              href="/cv.pdf"
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
                <div>
                  <p className="font-semibold">PhD in Computer Science</p>
                  <p>XYZ University, 2020-Present</p>
                  <p className="text-sm text-gray-600">Thesis: Machine Learning Applications in Healthcare</p>
                </div>
                <div>
                  <p className="font-semibold">MSc in Artificial Intelligence</p>
                  <p>ABC Institute, 2018-2020</p>
                  <p className="text-sm text-gray-600">GPA: 3.9/4.0</p>
                </div>
                <div>
                  <p className="font-semibold">BSc in Computer Engineering</p>
                  <p>DEF College, 2014-2018</p>
                  <p className="text-sm text-gray-600">GPA: 3.8/4.0</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary border-b border-primary/30 pb-2">Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Programming Languages</p>
                  <p>Python, JavaScript, Java, C++, SQL</p>
                </div>
                <div>
                  <p className="font-semibold">Machine Learning</p>
                  <p>TensorFlow, PyTorch, Scikit-learn, Keras</p>
                </div>
                <div>
                  <p className="font-semibold">Web Development</p>
                  <p>React, Node.js, Express, Tailwind CSS</p>
                </div>
                <div>
                  <p className="font-semibold">Languages</p>
                  <p>English (Native), Chinese (Fluent), Japanese (Conversational)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-primary border-b border-primary/30 pb-2">Selected Publications</h3>
            <ul className="space-y-2 text-sm">
              <li>Doe, J., Smith, A., & Johnson, B. (2023). Attention-based Deep Learning for Medical Image Analysis. IEEE Journal of Biomedical and Health Informatics.</li>
              <li>Doe, J., Lee, S., & Wang, H. (2022). Multilingual Transfer Learning in Clinical NLP. Journal of the American Medical Informatics Association.</li>
              <li>Smith, A., Doe, J., & Brown, C. (2021). Knowledge Graph Construction from Electronic Health Records. Proceedings of KDD.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;