import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaTimes, FaThumbtack } from 'react-icons/fa';

const TravelMapCartoon = ({ travelData }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredPlace, setHoveredPlace] = useState(null);

  const nextPhoto = () => {
    if (selectedPlace) {
      setCurrentPhotoIndex((prev) => 
        prev === selectedPlace.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedPlace) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? selectedPlace.photos.length - 1 : prev - 1
      );
    }
  };

  const openPlaceModal = (place) => {
    setSelectedPlace(place);
    setCurrentPhotoIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlace(null);
  };

  // 键盘事件处理
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowRight') {
          nextPhoto();
        } else if (e.key === 'ArrowLeft') {
          prevPhoto();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, selectedPlace]);

  // 手绘地图上的城市坐标（相对于地图图片的百分比位置）
  const getMapPosition = (place) => {
    const positions = {
      '上海': { x: 75, y: 70 },
      '杭州': { x: 72, y: 72 },
      '苏州': { x: 70, y: 68 },
    //   '南京': { x: 68, y: 66 },
      '南京': { x: 56, y: 46 },
      '北京': { x: 65, y: 45 },
      '广州': { x: 60, y: 85 },
      '深圳': { x: 58, y: 87 },
      '成都': { x: 45, y: 75 },
      '重庆': { x: 50, y: 78 },
      '西安': { x: 55, y: 65 },
      '武汉': { x: 62, y: 72 },
      '长沙': { x: 58, y: 80 },
      '青岛': { x: 70, y: 58 },
      '大连': { x: 78, y: 48 },
      '厦门': { x: 68, y: 75 },
      '昆明': { x: 40, y: 85 },
      '拉萨': { x: 30, y: 75 },
      '乌鲁木齐': { x: 25, y: 45 },
      '哈尔滨': { x: 80, y: 35 },
      '沈阳': { x: 78, y: 42 },
      '丽江': { x: 42, y: 82 },
      '桂林': { x: 52, y: 88 },
      '三亚': { x: 55, y: 92 },
      '青岛': { x: 70, y: 58 },
      '大连': { x: 78, y: 48 },
      '天津': { x: 67, y: 52 },
      '济南': { x: 68, y: 60 },
      '郑州': { x: 62, y: 68 },
      '合肥': { x: 66, y: 70 },
      '南昌': { x: 64, y: 76 },
      '福州': { x: 70, y: 72 },
      '南宁': { x: 50, y: 88 },
      '海口': { x: 52, y: 92 },
      '贵阳': { x: 48, y: 82 },
      '银川': { x: 35, y: 65 },
      '西宁': { x: 32, y: 70 },
      '兰州': { x: 38, y: 68 },
      '拉萨': { x: 30, y: 75 }
    };
    return positions[place.city] || { x: 50, y: 50 };
  };

  return (
    <div className="w-full">
      {/* 手绘地图容器 */}
      <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* 手绘中国地图背景 */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-2xl max-h-96">
            {/* 手绘地图图片 - 使用占位图片，您可以替换为真实的手绘地图 */}
            <img
              src="images/travel/china-map.png"
              alt="手绘中国地图"
              className="w-full h-full object-contain opacity-90"
              onError={(e) => {
                // 如果图片加载失败，显示SVG手绘风格地图
                e.target.style.display = 'none';
                const svgContainer = e.target.nextElementSibling;
                if (svgContainer) svgContainer.style.display = 'block';
              }}
            />
            
            {/* 备用SVG手绘地图 */}
            <svg
              viewBox="0 0 800 600"
              className="w-full h-full object-contain opacity-90 hidden"
              style={{ filter: 'drop-shadow(0 0 15px rgba(59,130,246,0.3))' }}
            >
              {/* 手绘风格的中国地图轮廓 */}
              <path
                d="M200,100 Q250,80 300,100 Q350,120 400,100 Q450,80 500,100 Q550,120 600,100 L650,110 L670,130 L650,150 L600,160 Q550,180 500,160 Q450,140 400,160 Q350,180 300,160 Q250,140 200,160 L150,150 L130,130 L150,110 Z"
                fill="#E0F2FE"
                stroke="#0EA5E9"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              
              {/* 手绘风格的装饰元素 */}
              <circle cx="250" cy="120" r="4" fill="#0EA5E9" opacity="0.6"/>
              <circle cx="400" cy="130" r="4" fill="#0EA5E9" opacity="0.6"/>
              <circle cx="550" cy="140" r="4" fill="#0EA5E9" opacity="0.6"/>
              <circle cx="350" cy="150" r="4" fill="#0EA5E9" opacity="0.6"/>
              <circle cx="500" cy="160" r="4" fill="#0EA5E9" opacity="0.6"/>
              
              {/* 主要城市标记 */}
              <circle cx="300" cy="130" r="6" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
              <circle cx="450" cy="140" r="6" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
              <circle cx="250" cy="160" r="6" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
              <circle cx="400" cy="170" r="6" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
              <circle cx="550" cy="160" r="6" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* 城市热点标记 */}
        {travelData.map((place) => {
          const position = getMapPosition(place);
          return (
            <motion.div
              key={place.id}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: place.id * 0.1 }}
              className="absolute cursor-pointer"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setHoveredPlace(place)}
              onMouseLeave={() => setHoveredPlace(null)}
              onClick={() => openPlaceModal(place)}
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 5 }}
                className="relative"
              >
                {/* 可爱的图钉设计 */}
                <div className="relative">
                  {/* 图钉阴影 */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black/20 rounded-full"></div>
                  
                  {/* 图钉主体 */}
                  <div className="w-5 h-5 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-red-600 relative">
                    <FaThumbtack className="text-white text-xs" />
                  </div>
                  
                  {/* 图钉高光 */}
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                  
                  {/* 图钉装饰 */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* 连接线 */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-red-400 to-transparent"></div>
                
                {/* 悬停时显示的照片预览 */}
                {hoveredPlace?.id === place.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white rounded-xl p-3 shadow-2xl border border-gray-200 z-20"
                    style={{ minWidth: '160px' }}
                  >
                    <div className="w-28 h-24 bg-gray-100 rounded-lg overflow-hidden mb-2 border border-gray-200">
                      <img
                        src={place.photos[0]}
                        alt={place.city}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/112x96?text=${place.city}`;
                        }}
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-800 text-center">{place.city}</div>
                    <div className="text-xs text-gray-600 text-center">{place.date}</div>
                    <div className="text-xs text-gray-500 text-center mt-1 line-clamp-2">{place.description}</div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}



        <div className="absolute top-4 right-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>

        {/* 装饰性云朵 */}
        <div className="absolute top-8 right-8 opacity-20">
          <div className="text-4xl">☁️</div>
        </div>
        <div className="absolute bottom-8 left-8 opacity-20">
          <div className="text-3xl">🌤️</div>
        </div>
      </div>

      {/* 地点列表 */}
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {travelData.map((place) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => openPlaceModal(place)}
          >
            <div className="flex items-center gap-2 mb-2">
              <FaThumbtack className="text-red-500" />
              <span className="font-semibold text-gray-800">{place.city}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <FaCalendarAlt className="text-gray-500 text-sm" />
              <span className="text-sm text-gray-600">{place.date}</span>
            </div>
            <p className="text-sm text-gray-700 line-clamp-2">{place.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 详情弹窗 */}
      <AnimatePresence>
        {isModalOpen && selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 头部 */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedPlace.city}</h2>
                  <p className="text-gray-600">{selectedPlace.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* 图片轮播 */}
              <div className="relative h-64 md:h-80 bg-gray-100">
                <img
                  src={selectedPlace.photos[currentPhotoIndex]}
                  alt={`${selectedPlace.city} - ${currentPhotoIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x400?text=${selectedPlace.city}+${currentPhotoIndex + 1}`;
                  }}
                />
                
                {/* 轮播导航 */}
                {selectedPlace.photos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                    >
                      <FaChevronLeft className="text-gray-600" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                    >
                      <FaChevronRight className="text-gray-600" />
                    </button>
                    
                    {/* 指示器 */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedPlace.photos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPhotoIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* 内容 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{selectedPlace.title}</h3>
                <p className="text-gray-700 mb-4">{selectedPlace.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 italic">"{selectedPlace.memories}"</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelMapCartoon; 