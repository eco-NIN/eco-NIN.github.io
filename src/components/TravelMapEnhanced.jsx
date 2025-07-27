import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';

// 修复Leaflet默认图标问题
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const TravelMapEnhanced = ({ travelData }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="w-full">
      {/* 地图容器 */}
      <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[35.8617, 104.1954]} // 中国中心
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          className="z-10"
          zoomControl={true}
          scrollWheelZoom={true}
          doubleClickZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          {/* 使用更美观的瓦片图层 */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            subdomains="abcd"
            maxZoom={19}
          />
          
          {travelData.map((place) => (
            <Marker
              key={place.id}
              position={place.location}
              eventHandlers={{ 
                click: () => openPlaceModal(place),
                mouseover: (e) => {
                  e.target.setZIndexOffset(1000);
                },
                mouseout: (e) => {
                  e.target.setZIndexOffset(0);
                }
              }}
            >
              <Popup>
                <div className="text-center p-2">
                  <h3 className="font-semibold text-gray-800 text-sm">{place.city}</h3>
                  <p className="text-xs text-gray-600">{place.date}</p>
                  <button
                    onClick={() => openPlaceModal(place)}
                    className="text-primary text-xs hover:underline mt-1"
                  >
                    查看详情
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* 地图说明 */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaMapMarkerAlt className="text-primary" />
            <span>点击标记查看旅行回忆</span>
          </div>
        </div>

        {/* 地图控制提示 */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-xs text-gray-600">
            <div>🖱️ 拖拽移动</div>
            <div>🔍 滚轮缩放</div>
          </div>
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
              <FaMapMarkerAlt className="text-primary" />
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

export default TravelMapEnhanced; 