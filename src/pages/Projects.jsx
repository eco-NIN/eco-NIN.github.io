import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const { t } = useTranslation();

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'AI Medical Diagnosis Toolkit',
      description: 'An open-source framework for medical image analysis and disease prediction using deep learning models.',
      githubUrl: 'https://github.com/username/ai-medical-toolkit',
      demoUrl: 'https://username.github.io/ai-medical-toolkit',
      techStack: ['Python', 'PyTorch', 'React', 'FastAPI'],
      image: 'https://via.placeholder.com/600x400?text=AI+Medical+Toolkit',
    },
    {
      id: 2,
      title: 'Multilingual Medical NLP Library',
      description: 'A Python library for processing and analyzing clinical text in multiple languages with BERT-based models.',
      githubUrl: 'https://github.com/username/multilingual-medical-nlp',
      demoUrl: null,
      techStack: ['Python', 'HuggingFace', 'Scikit-learn', 'NLTK'],
      image: 'https://via.placeholder.com/600x400?text=Multilingual+Medical+NLP',
    },
    {
      id: 3,
      title: 'Academic Homepage Generator',
      description: 'A React-based template for creating academic personal websites with built-in SEO optimization.',
      githubUrl: 'https://github.com/username/academic-homepage',
      demoUrl: 'https://username.github.io/academic-homepage',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
      image: 'https://via.placeholder.com/600x400?text=Academic+Homepage',
    },
    {
      id: 4,
      title: 'Research Paper Manager',
      description: 'A desktop application for organizing research papers with citation management and PDF annotation features.',
      githubUrl: 'https://github.com/username/paper-manager',
      demoUrl: null,
      techStack: ['Electron', 'TypeScript', 'SQLite', 'Node.js'],
      image: 'https://via.placeholder.com/600x400?text=Paper+Manager',
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
          {t('nav.projects')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass rounded-xl overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-800 hover:text-primary transition-colors"
                  >
                    <FiGithub className="mr-1" /> GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-800 hover:text-secondary transition-colors"
                    >
                      <FiExternalLink className="mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;