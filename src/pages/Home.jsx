/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 01:20:37
 * @FilePath: /eco-NIN.github.io/src/pages/Home.jsx
 * @Descripttion: 
 */
import { motion } from 'framer-motion';
import { homeConfig } from '../config/homeConfig';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  // 获取状态对应的样式和图标
  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return {
          bgColor: 'bg-green-500',
          textColor: 'text-green-700',
          icon: <FaCheckCircle className="w-4 h-4" />,
          label: '已完成'
        };
      case 'ongoing':
        return {
          bgColor: 'bg-primary',
          textColor: 'text-primary',
          icon: <FaClock className="w-4 h-4" />,
          label: '进行中'
        };
      case 'upcoming':
        return {
          bgColor: 'bg-gray-500',
          textColor: 'text-gray-700',
          icon: <FaArrowRight className="w-4 h-4" />,
          label: '即将开始'
        };
      default:
        return {
          bgColor: 'bg-gray-500',
          textColor: 'text-gray-700',
          icon: <FaArrowRight className="w-4 h-4" />,
          label: '即将开始'
        };
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="w-full px-4 py-24">
        {/* Hero Section with Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-none md:rounded-2xl mb-8 w-full"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
              <img
                src="/images/profile.jpg"
                alt={homeConfig.basicInfo.photoAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {homeConfig.basicInfo.name}
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                {homeConfig.basicInfo.title}
              </p>
              <p className="text-lg leading-relaxed">
                {homeConfig.basicInfo.intro}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl w-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaCalendarAlt className="text-2xl text-primary" />
            <h2 className="text-2xl font-bold">日程安排</h2>
          </div>
          
          {/* 可滑动的时间线容器 */}
          <div className="relative">
            {/* 时间线连接线 */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* 滚动容器 */}
            <div className="max-h-96 overflow-y-auto scrollbar-hide">
              <div className="space-y-6 pr-4">
                {homeConfig.timeline.map((item, index) => {
                  const statusStyle = getStatusStyle(item.status);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex items-start gap-4"
                    >
                      {/* 时间线节点 */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${statusStyle.bgColor} flex items-center justify-center text-white shadow-lg`}>
                        {statusStyle.icon}
                      </div>
                      
                      {/* 内容卡片 */}
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">{item.date}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${statusStyle.textColor} bg-white/50`}>
                            {statusStyle.label}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;