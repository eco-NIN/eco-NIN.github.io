import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaTag, FaShare, FaBookOpen, FaHeart } from 'react-icons/fa';
import { lifeConfig } from '../config/lifeConfig';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  useEffect(() => {
    // 根据ID查找文章
    const foundArticle = lifeConfig.blogPosts.find(post => post.id === parseInt(id));
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      // 如果找不到文章，跳转到随笔列表页
      navigate('/essays');
    }
  }, [id, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      });
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href);
      alert('链接已复制到剪贴板');
    }
    setShareCount(prev => prev + 1);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  if (!article) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <div className="w-full px-4 py-24">
        
        {/* 文章头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-2xl mb-8 w-full"
        >
          {/* 返回按钮和操作栏 */}
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-lg transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
              <span className="text-gray-600">返回</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/30 text-gray-600 hover:bg-white/50'
                }`}
              >
                <FaHeart className={isLiked ? 'text-white' : 'text-gray-600'} />
                <span>{isLiked ? '已喜欢' : '喜欢'}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white/30 hover:bg-white/50 rounded-lg transition-colors"
              >
                <FaShare className="text-gray-600" />
                <span className="text-gray-600">分享</span>
                {shareCount > 0 && (
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                    {shareCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* 文章信息 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaCalendarAlt className="text-primary" />
                <span>{article.date}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {article.summary}
            </p>

            {/* 标签 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                  <FaTag className="text-xs" />
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 文章内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-8 w-full"
        >
          <div className="prose prose-lg max-w-none">
            {/* 渲染HTML内容 */}
            <div 
              className="space-y-6 text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </motion.div>

        {/* 相关文章推荐 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass p-8 rounded-2xl w-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaBookOpen className="text-2xl text-primary" />
            <h2 className="text-2xl font-bold text-gray-800">相关文章</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {lifeConfig.blogPosts
              .filter(post => post.id !== article.id && post.category === article.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/40 transition-colors cursor-pointer"
                  onClick={() => navigate(`/essays/${relatedPost.id}`)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {relatedPost.category}
                    </span>
                    <span className="text-sm text-gray-500">{relatedPost.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {relatedPost.summary}
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticleDetail; 