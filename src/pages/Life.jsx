import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { lifeConfig } from '../config/lifeConfig';
import { FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaBookOpen, FaGlobe, FaArrowRight } from 'react-icons/fa';
import TravelMap from '../components/TravelMap';
import TravelMapEnhanced from '../components/TravelMapEnhanced';
import TravelMapCartoon from '../components/TravelMapCartoon';
import PhotoCarousel from '../components/PhotoCarousel';

const Life = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedMoment, setSelectedMoment] = useState(null);
  const [mapType, setMapType] = useState('cartoon'); // 'leaflet', 'mapbox', 'cartoon'
  const [clickedPost, setClickedPost] = useState(null);

  const categories = ['全部', '感悟', '技术', '旅行', '随笔'];

  const filteredPosts = selectedCategory === '全部' 
    ? lifeConfig.blogPosts 
    : lifeConfig.blogPosts.filter(post => post.category === selectedCategory);

  const handlePostClick = (post) => {
    setClickedPost(post.id);
    
    // 添加点击变色效果
    setTimeout(() => {
      setClickedPost(null);
    }, 300);

    // 跳转到文章详情页面
    navigate(`/essays/${post.id}`);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="w-full px-4 py-24">
        
        {/* 生活剪影轮播 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-2xl mb-12 w-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaHeart className="text-2xl text-primary" />
            <h2 className="text-2xl font-bold text-gray-800">生活剪影</h2>
          </div>
          
          {/* 照片轮播 */}
          <PhotoCarousel 
            photos={lifeConfig.lifeMoments}
            autoPlay={true}
            interval={4000}
          />
        </motion.section>

        {/* 随笔文章 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-12 w-full"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FaBookOpen className="text-2xl text-primary" />
              <h2 className="text-2xl font-bold text-gray-800">随笔</h2>
            </div>
            <button 
              onClick={() => navigate('/essays')}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-sm"
            >
              查看全部随笔 →
            </button>
          </div>
          
          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white/50 text-gray-600 hover:bg-white/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* 文章列表 - 一行一篇文章 */}
          <div className="space-y-4">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/50 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${
                  clickedPost === post.id ? 'bg-primary/20 border-primary/50 scale-95' : ''
                }`}
                onClick={() => handlePostClick(post)}
              >
                {/* 左侧日期栏 */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transition-all duration-300 ${
                  clickedPost === post.id ? 'w-2 bg-primary' : ''
                }`}></div>
                
                <div className="flex items-center gap-6 pl-6">
                  {/* 日期信息 */}
                  <div className="flex-shrink-0 text-center min-w-[80px]">
                    <div className={`text-2xl font-bold transition-colors ${
                      clickedPost === post.id ? 'text-white' : 'text-primary group-hover:text-primary/80'
                    }`}>
                      {post.date.split('年')[1]?.split('月')[0] || '01'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {post.date.split('年')[0]}-{post.date.split('年')[1]?.split('月')[0] || '01'}
                    </div>
                  </div>
                  
                  {/* 文章内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full transition-colors ${
                        clickedPost === post.id 
                          ? 'bg-white/30 text-white' 
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {post.category}
                      </span>
                      <h3 className={`text-lg font-semibold transition-colors truncate ${
                        clickedPost === post.id ? 'text-white' : 'text-gray-800 group-hover:text-primary'
                      }`}>
                        {post.title}
                      </h3>
                    </div>
                    <p className={`text-sm line-clamp-2 transition-colors ${
                      clickedPost === post.id ? 'text-white/90' : 'text-gray-700 group-hover:text-gray-800'
                    }`}>
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2 py-1 rounded-full transition-colors ${
                          clickedPost === post.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* 右侧箭头 */}
                  <div className={`flex-shrink-0 transition-all duration-300 transform ${
                    clickedPost === post.id 
                      ? 'opacity-100 translate-x-0 text-white' 
                      : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-primary'
                  }`}>
                    <FaArrowRight className="text-lg" />
                  </div>
                </div>
                
                {/* 悬停时的背景效果 */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  clickedPost === post.id 
                    ? 'bg-primary/30 opacity-100' 
                    : 'bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 旅游地图 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass p-8 rounded-2xl w-full"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FaGlobe className="text-2xl text-primary" />
              <h2 className="text-2xl font-bold text-gray-800">我的足迹</h2>
            </div>
            
            {/* 地图类型选择 */}
            <div className="flex gap-2">
              <button
                onClick={() => setMapType('cartoon')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  mapType === 'cartoon' ? 'bg-primary text-white' : 'bg-white/50 text-gray-600 hover:bg-white/70'
                }`}
              >
                卡通
              </button>
              <button
                onClick={() => setMapType('enhanced')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  mapType === 'enhanced' ? 'bg-primary text-white' : 'bg-white/50 text-gray-600 hover:bg-white/70'
                }`}
              >
                流畅
              </button>
              <button
                onClick={() => setMapType('leaflet')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  mapType === 'leaflet' ? 'bg-primary text-white' : 'bg-white/50 text-gray-600 hover:bg-white/70'
                }`}
              >
                标准
              </button>
            </div>
          </div>
          
          {/* 根据选择显示不同地图 */}
          {mapType === 'cartoon' && <TravelMapCartoon travelData={lifeConfig.travelMap} />}
          {mapType === 'enhanced' && <TravelMapEnhanced travelData={lifeConfig.travelMap} />}
          {mapType === 'leaflet' && <TravelMap travelData={lifeConfig.travelMap} />}
        </motion.section>
      </div>

      {/* 详情弹窗 */}
      {selectedMoment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{selectedMoment.title}</h3>
              <button 
                onClick={() => setSelectedMoment(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <img 
              src={selectedMoment.image} 
              alt={selectedMoment.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=' + selectedMoment.title;
              }}
            />
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{selectedMoment.date}</span>
                <span>{selectedMoment.location}</span>
                <span className="px-2 py-1 bg-primary/20 text-primary rounded-full">
                  {selectedMoment.category}
                </span>
              </div>
              <p className="text-gray-700">{selectedMoment.description}</p>
              <p className="text-gray-600 italic">"{selectedMoment.details}"</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Life;