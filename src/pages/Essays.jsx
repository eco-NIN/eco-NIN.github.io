import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaCalendarAlt, FaArrowLeft, FaSearch, FaFilter } from 'react-icons/fa';
import { lifeConfig } from '../config/lifeConfig';

const Essays = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date', 'title', 'category'

  const categories = ['全部', '感悟', '技术', '旅行', '随笔'];

  // 过滤和排序文章
  const filteredAndSortedPosts = lifeConfig.blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === '全部' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'date':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

  return (
    <div className="min-h-screen w-full">
      <div className="w-full px-4 py-24">
        
        {/* 页面头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-2xl mb-8 w-full"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.history.back()}
                className="p-2 rounded-lg bg-white/30 hover:bg-white/50 transition-colors"
              >
                <FaArrowLeft className="text-gray-600" />
              </button>
              <div className="flex items-center gap-3">
                <FaBookOpen className="text-2xl text-primary" />
                <h1 className="text-3xl font-bold text-gray-800">我的随笔</h1>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              共 {filteredAndSortedPosts.length} 篇文章
            </div>
          </div>

          {/* 搜索和筛选 */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* 搜索框 */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="搜索文章标题、内容或标签..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/50 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* 排序选择 */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/50 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                <option value="date">按日期排序</option>
                <option value="title">按标题排序</option>
                <option value="category">按分类排序</option>
              </select>
            </div>
          </div>

          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-3">
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
        </motion.div>

        {/* 文章列表 */}
        <div className="space-y-6">
          {filteredAndSortedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => {
                if (post.link) {
                  if (post.link.startsWith('http')) {
                    window.open(post.link, '_blank');
                  } else {
                    window.location.href = `/essays/${post.id}`;
                  }
                }
              }}
            >
              <div className="flex items-start gap-6">
                {/* 左侧日期 */}
                <div className="flex-shrink-0 text-center min-w-[100px]">
                  <div className="text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {post.date.split('年')[1]?.split('月')[0] || '01'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {post.date.split('年')[0]}年{post.date.split('年')[1]?.split('月')[0] || '01'}月
                  </div>
                  <div className="mt-2">
                    <FaCalendarAlt className="text-primary/50 mx-auto" />
                  </div>
                </div>

                {/* 右侧内容 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {post.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      点击阅读全文
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowLeft className="text-primary transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 空状态 */}
        {filteredAndSortedPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass p-12 rounded-2xl text-center"
          >
            <FaBookOpen className="text-4xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">暂无文章</h3>
            <p className="text-gray-500">
              {searchTerm ? '没有找到匹配的文章，请尝试其他关键词' : '该分类下暂无文章'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Essays; 