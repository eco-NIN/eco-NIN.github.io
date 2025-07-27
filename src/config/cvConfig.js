/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 12:10:06
 * @FilePath: /eco-NIN.github.io/src/config/cvConfig.js
 * @Descripttion: 
 */
// CV页面配置
export const cvConfig = {
  // 基本信息
  basicInfo: {
    name: 'John Doe',
    title: 'PhD Candidate in Computer Science',
    cvFile: '/cv.pdf',
  },

  // 教育背景
  education: [
    {
      degree: 'PhD in Computer Science',
      institution: 'XYZ University',
      period: '2020-Present',
      details: 'Thesis: Machine Learning Applications in Healthcare',
    },
    {
      degree: 'MSc in Artificial Intelligence',
      institution: 'ABC Institute',
      period: '2018-2020',
      details: 'GPA: 3.9/4.0',
    },
    {
      degree: 'BSc in Computer Engineering',
      institution: 'DEF College',
      period: '2014-2018',
      details: 'GPA: 3.8/4.0',
    },
  ],

  // 技能
  skills: [
    {
      category: 'Programming Languages',
      items: 'Python, JavaScript, Java, C++, SQL',
    },
    {
      category: 'Machine Learning',
      items: 'TensorFlow, PyTorch, Scikit-learn, Keras',
    },
    {
      category: 'Web Development',
      items: 'React, Node.js, Express, Tailwind CSS',
    },
    {
      category: 'Languages',
      items: 'English (Native), Chinese (Fluent), Japanese (Conversational)',
    },
  ],

  // 精选论文
  publications: [
    'Doe, J., Smith, A., & Johnson, B. (2023). Attention-based Deep Learning for Medical Image Analysis. IEEE Journal of Biomedical and Health Informatics.',
    'Doe, J., Lee, S., & Wang, H. (2022). Multilingual Transfer Learning in Clinical NLP. Journal of the American Medical Informatics Association.',
    'Smith, A., Doe, J., & Brown, C. (2021). Knowledge Graph Construction from Electronic Health Records. Proceedings of KDD.',
  ],
}; 