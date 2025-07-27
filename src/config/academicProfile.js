/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 11:43:07
 * @FilePath: /eco-NIN.github.io/src/config/academicProfile.js
 * @Descripttion: 
 */
// 学术个人资料配置
export const academicProfile = {
  // 基本信息
  name: "Yuzhe Guo",
  title: "Undergraduate Student, Computer Science",
  institution: "East China University of Science and Technology",
  location: "Shanghai, China",
  
  // 个人简介
  bio: "hi, I'm Yuzhe Guo, a undergraduate student in East China University of Science and Technology. I'm interested in machine learning, artificial intelligence, and their applications in real-world problems. I'm passionate about developing innovative solutions that bridge the gap between theoretical advances and practical applications.",
  
  // 头像图片路径
  imageUrl: "/images/profile.jpg",
  
  // 社交链接
  socialLinks: {
    github: "https://github.com/eco-NIN",
    // linkedin: "https://linkedin.com/in/yourusername",
    // scholar: "https://scholar.google.com/citations?user=yourid",
    email: "22013229@mail.ecust.edu.cn",
    // twitter: "https://twitter.com/yourusername", // 可选
    // website: "https://yourwebsite.com", // 可选
    // orcid: "https://orcid.org/0000-0000-0000-0000" // 可选
  },
  
  // 研究方向
  researchInterests: [
    {
      title: "Computer Vision",
      description: "Object detection, image segmentation, and real-time vision systems using deep learning frameworks like YOLO and GANs."
    },
    {
      title: "Artificial Intelligence",
      description: "Applied AI in education, robotics, and human-computer interaction, with an interest in the interpretability and ethics of AI systems."
    },
    {
      title: "Multimodal Learning",
      description: "Combining visual, motion (IMU), and textual data for tasks like identity recognition, human activity understanding, and information generation."
    },
    {
      title: "Machine Learning Systems",
      description: "Designing lightweight, deployable learning systems and optimizing training pipelines for real-world applications."
    }
  ],
  
  // 最新动态
  recentUpdates: [
    {
      title: "YOLOv7-based Tomato Detection System Completed",
      description: "Deployed a local Gradio interface with custom-trained model for agricultural automation.",
      date: "June 2025"
    },
    {
      title: "IMU-based Identity Recognition Project Finished",
      description: "Developed a CNN-based continuous identity recognition pipeline with quaternion preprocessing and ensemble voting.",
      date: "May 2025"
    },
    {
      title: "GAN-based MNIST Generation Visualizer Launched",
      description: "Implemented training visualization and parameter tuning for GAN generating digit '5'.",
      date: "April 2025"
    }
  ],
  
  
  // 教育背景
  education: [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence",
      institution: "Shanghai Jiao Tong University",
      year: "2021 - 2025 (Expected)"
    },
    {
      degree: "High School Science Track",
      institution: "N/A",
      year: "Before 2021"
    }
  ],
  
  // 工作经验
  experience: [
    {
      title: "Research Intern",
      institution: "East China University of Science and Technology",
      period: "2022 - Present",
      description: "Engaged in AI-related projects under faculty guidance, covering computer vision, human recognition, and multimodal interaction."
    },
    {
      title: "Technical Group Leader",
      institution: "Course Project / Student Research",
      period: "2022 - Present",
      description: "Led full-stack development of intelligent systems, coordinated frontend/backend integration and algorithm deployment."
    }
  ]
}; 