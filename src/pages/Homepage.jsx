/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 10:59:22
 * @FilePath: /eco-NIN.github.io/src/pages/Homepage.jsx
 * @Descripttion: 
 */
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaUniversity, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';
import { academicProfile } from '../config/academicProfile';

export default function Homepage() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 左侧边栏 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="glass p-6 rounded-2xl sticky top-24">
              {/* 头像 */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                  <img 
                    src={academicProfile.imageUrl} 
                    alt={`${academicProfile.name} Profile Photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* 姓名 */}
              <h1 className="text-2xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {academicProfile.name}
              </h1>
              
              {/* 简介 */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                {academicProfile.bio}
              </p>
              
              {/* 联系信息 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                  <span>{academicProfile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaUniversity className="w-4 h-4 text-primary" />
                  <span>{academicProfile.institution}</span>
                </div>
                {academicProfile.socialLinks.email && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaEnvelope className="w-4 h-4 text-primary" />
                    <a href={academicProfile.socialLinks.email} className="hover:text-primary transition-colors">
                      Email
                    </a>
                  </div>
                )}
                {academicProfile.socialLinks.scholar && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <SiGooglescholar className="w-4 h-4 text-primary" />
                    <a href={academicProfile.socialLinks.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      Google Scholar
                    </a>
                  </div>
                )}
                {academicProfile.socialLinks.github && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaGithub className="w-4 h-4 text-primary" />
                    <a href={academicProfile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      GitHub
                    </a>
                  </div>
                )}
                {academicProfile.socialLinks.linkedin && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaLinkedin className="w-4 h-4 text-primary" />
                    <a href={academicProfile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-700">
                  <SiOrcid className="w-4 h-4 text-primary" />
                  <a href="#" className="hover:text-primary transition-colors">
                    ORCID
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* 右侧主内容区 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3"
          >
            {/* 研究方向 */}
            <div className="glass p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Research Interests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {academicProfile.researchInterests.map((interest, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{interest.title}</h3>
                    <p className="text-gray-700">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 教育背景 */}
            <div className="glass p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <FaGraduationCap className="text-primary" />
                Education
              </h2>
              <div className="space-y-4">
                {academicProfile.education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700 font-medium">{edu.degree}</p>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 工作经验 */}
            <div className="glass p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <FaBriefcase className="text-primary" />
                Experience
              </h2>
              <div className="space-y-4">
                {academicProfile.experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700 font-medium">{exp.title}</p>
                      <p className="text-gray-600">{exp.institution}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                      <p className="text-gray-700 mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 最新动态 */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Updates</h2>
              <div className="space-y-4">
                {academicProfile.recentUpdates.map((update, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium">{update.title}</span> {update.description}
                      </p>
                      <p className="text-sm text-gray-500">{update.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}