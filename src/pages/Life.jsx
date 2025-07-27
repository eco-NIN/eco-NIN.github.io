import { motion } from 'framer-motion';
import { useState } from 'react';
import { lifeConfig } from '../config/lifeConfig';
import { FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaBookOpen, FaGlobe } from 'react-icons/fa';
import TravelMap from '../components/TravelMap';
import TravelMapEnhanced from '../components/TravelMapEnhanced';
import TravelMapCartoon from '../components/TravelMapCartoon';

const Life = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedMoment, setSelectedMoment] = useState(null);
  const [mapType, setMapType] = useState('cartoon'); // 'leaflet', 'mapbox', 'cartoon'

  const categories = ['全部', '感悟', '技术', '旅行', '随笔'];

  const filteredPosts = selectedCategory === '全部' 
    ? lifeConfig.blogPosts 
    : lifeConfig.blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen w-full">
      <div className="w-full px-4 py-24">
        
        {/* 生活剪影时间线 */}
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
          
          {/* 生活剪影展示 */}
          <div className="grid md:grid-cols-2 gap-6">
            {lifeConfig.lifeMoments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/30 hover:bg-white/40 transition-colors cursor-pointer"
                onClick={() => setSelectedMoment(moment)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={moment.image} 
                    alt={moment.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=' + moment.title;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaCalendarAlt className="text-primary text-sm" />
                    <span className="text-sm text-gray-600">{moment.date}</span>
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {moment.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{moment.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <FaMapMarkerAlt className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-600">{moment.location}</span>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-3">{moment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 博客文章 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-12 w-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaBookOpen className="text-2xl text-primary" />
            <h2 className="text-2xl font-bold text-gray-800">我的文字</h2>
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
          
          {/* 文章列表 */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{post.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (post.link) {
                      window.open(post.link, '_blank');
                    }
                  }}
                >
                  阅读更多 →
                </button>
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