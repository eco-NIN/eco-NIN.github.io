/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 12:22:22
 * @FilePath: /eco-NIN.github.io/src/config/homeConfig.js
 * @Descripttion: 
 */
// Home页面配置
export const homeConfig = {
  // 基本信息
  basicInfo: {
    name: 'Yuzhe Guo',
    title: '我写代码，也写日记',
    // intro: '欢迎来到我的学术主页。我是一名专注于人工智能与机器学习领域的研究者。',
    photoAlt: '个人照片',
  },

  // 时间线日程安排 - 按时间倒序排列
  timeline: [
    {
      id: 1,
      date: '2026年6月',
      title: '毕业答辩',
      description: '准备本科论文答辩',
      status: 'upcoming',
      category: 'academic'
    },
    {
      id: 2,
      date: '2025年9月28日',
      title: '学业任务',
      description: '预推免',
      status: 'upcoming',
      category: 'research'
    },
    {
      id: 5,
      date: '2025年6月30日-2025年8月10日',
      title: '暑期科研',
      description: '上海交通大学SAI',
      status: 'ongoing',
      category: 'conference'
    },
    {
        id: 6,
        date: '2025年7月11日',
        title: '搬家',
        description: '搬到徐汇校区',
        status: 'completed',
        category: 'research'
    },
    {
      id: 6,
      date: '2025年2月23日-2025年7月11日',
      title: '学业任务',
      description: '大三下学期结束',
      status: 'completed',
      category: 'research'
    }
  ],
}; 