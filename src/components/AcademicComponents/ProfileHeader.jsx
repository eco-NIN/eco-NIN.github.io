/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 11:41:50
 * @FilePath: /eco-NIN.github.io/src/components/AcademicComponents/ProfileHeader.jsx
 * @Descripttion: 
 */
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const ProfileHeader = ({ 
  name = "Your Name",
  title = "PhD Candidate, Computer Science",
  institution = "Shanghai Jiao Tong University",
  bio = "I am a PhD candidate in Computer Science at Shanghai Jiao Tong University. My research focuses on machine learning, artificial intelligence, and their applications in real-world problems.",
  imageUrl = "/images/profile.jpg",
  socialLinks = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    scholar: "https://scholar.google.com/citations?user=yourid",
    email: "mailto:your.email@sjtu.edu.cn"
  }
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      {/* 头像 */}
      <div className="flex-shrink-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
          <img 
            src={imageUrl} 
            alt={`${name} Profile Photo`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* 个人信息 */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {name}
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          {title}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          {institution}
        </p>
        
        {/* 简介 */}
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          {bio}
        </p>
        
        {/* 社交链接 */}
        <div className="flex flex-wrap gap-4">
          {socialLinks.github && (
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {socialLinks.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          )}
          {socialLinks.scholar && (
            <a 
              href={socialLinks.scholar} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <SiGooglescholar className="w-5 h-5" />
              <span>Google Scholar</span>
            </a>
          )}
          {socialLinks.email && (
            <a 
              href={socialLinks.email} 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Email</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader; 