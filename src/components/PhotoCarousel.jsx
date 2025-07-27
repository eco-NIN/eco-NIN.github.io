import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

const PhotoCarousel = ({ photos, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // 自动播放
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, photos.length]);

  // 切换到下一张
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // 切换到上一张
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  // 直接跳转到指定索引
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // 切换播放状态
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
      {/* 主图片区域 */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={photos[currentIndex].image}
              alt={photos[currentIndex].title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/800x500?text=${photos[currentIndex].title}`;
              }}
            />
            
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* 图片信息 */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                  {photos[currentIndex].category}
                </span>
                <span className="text-sm opacity-80">{photos[currentIndex].date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{photos[currentIndex].title}</h3>
              <p className="text-sm opacity-90 line-clamp-2">{photos[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 控制按钮 */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {/* 上一张按钮 */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        >
          <FaChevronLeft />
        </button>

        {/* 下一张按钮 */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* 播放控制 */}
      <div className="absolute top-4 right-4">
        <button
          onClick={togglePlay}
          className="w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* 缩略图指示器 */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 图片计数器 */}
      <div className="absolute top-4 left-4 bg-black/30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PhotoCarousel; 