/*
 * @Author: Yuzhe Guo
 * @Date: 2025-07-27 12:09:26
 * @FilePath: /eco-NIN.github.io/src/config/lifeConfig.js
 * @Descripttion: 
 */
// Life页面配置
export const lifeConfig = {
  // 生活剪影时间线
  lifeMoments: [
    {
      id: 1,
      date: '2025-07-10',
      title: '学校召开2025年春季学期工作总结会',
      location: '华东理工大学徐汇校区',
      description: '7月10日上午，华东理工大学2025年春季学期工作总结会在徐汇校区召开。校党委书记蒋传海、校长轩福贞出席会议并讲话。',
      image: '/images/life/qingdao.jpg',
      category: '学术',
      details: '这次会议让我深刻体会到了学校对教学质量的重视，也让我对自己的学习目标有了更清晰的认识。'
    },
    {
      id: 2,
      date: '2025-07-27',
      title: '副校长赵黎明率队赴四川自贡调研',
      location: '四川自贡',
      description: '副校长赵黎明带领团队前往四川自贡进行实地调研，深入了解当地产业发展情况。',
      image: '/images/life/research-trip.jpg',
      category: '调研',
      details: '这次调研让我看到了理论与实践的结合，也让我对产业发展的现状有了更直观的了解。'
    },
    {
      id: 3,
      date: '2025-07-26',
      title: '2025年中国大学生计算机设计大赛',
      location: '上海决赛区',
      description: '2025年(第18届)中国大学生计算机设计大赛(上海决赛区)在华东理工大学举行，我校学生表现优异。',
      image: '/images/life/computer-competition.jpg',
      category: '比赛',
      details: '参加这次比赛让我认识了很多优秀的同学，也让我对计算机设计有了更深的理解和热爱。'
    },
    {
      id: 4,
      date: '2025-07-25',
      title: '华理女乒代表中国队出征德国大运会',
      location: '德国',
      description: '华理女乒代表中国队出征德国大运会，获得2金3银2铜的出色战绩。',
      image: '/images/life/ping-pong.jpg',
      category: '体育',
      details: '看到同学们在国际赛场上为国争光，我感到无比自豪，也激励着我在自己的领域努力奋斗。'
    },
    {
      id: 5,
      date: '2025-07-24',
      title: 'Science Advances报道我校甲烷光热干重整研究新进展',
      location: '华东理工大学',
      description: '我校在甲烷光热干重整研究方面取得新进展，相关成果被Science Advances报道。',
      image: '/images/life/research-advance.jpg',
      category: '科研',
      details: '这项研究成果的发表让我看到了学校在科研方面的实力，也激励着我在学术道路上不断探索。'
    },
    {
      id: 6,
      date: '2025-07-23',
      title: '青春奋进：华理学子在各项赛事中崭露头角',
      location: '全国各地',
      description: '华理学子在各类学术竞赛、创新创业大赛中表现突出，展现了华理学子的风采。',
      image: '/images/life/student-achievement.jpg',
      category: '成就',
      details: '看到同学们在各个领域取得的成就，我感到非常振奋，也让我对自己的未来充满了信心。'
    }
  ],

  // 博客文章
  blogPosts: [
    {
      id: 1,
      title: '关于成长的思考',
      date: '2025年7月15日',
      category: '感悟',
      summary: '最近在思考什么是真正的成长，是知识的积累，还是心态的成熟？也许两者都是，但更重要的是学会与自己和解...',
      content: '最近在思考什么是真正的成长，是知识的积累，还是心态的成熟？也许两者都是，但更重要的是学会与自己和解。成长不是一蹴而就的，而是在每一个平凡的日子里，慢慢积累的过程。',
      tags: ['成长', '思考', '生活'],
      link: 'https://blog.example.com/growth-thinking' // 外部链接
    },
    {
      id: 2,
      title: '我的编程之路',
      date: '2025年6月20日',
      category: '技术',
      summary: '从第一次接触编程到现在，这条路走了很久。编程不仅仅是技术，更是一种思维方式...',
      content: '从第一次接触编程到现在，这条路走了很久。编程不仅仅是技术，更是一种思维方式。它教会了我如何分析问题、如何寻找解决方案，更重要的是，它让我明白了坚持的力量。',
      tags: ['编程', '技术', '学习'],
      link: 'https://blog.example.com/programming-journey' // 外部链接
    },
    {
      id: 3,
      title: '旅行中的小确幸',
      date: '2025年5月10日',
      category: '旅行',
      summary: '旅行不是为了到达目的地，而是为了享受路上的风景。那些不经意间发现的小确幸，往往是最珍贵的回忆...',
      content: '旅行不是为了到达目的地，而是为了享受路上的风景。那些不经意间发现的小确幸，往往是最珍贵的回忆。在陌生的城市里，我学会了用不同的眼光看待世界。',
      tags: ['旅行', '生活', '感悟'],
      link: 'https://blog.example.com/travel-happiness' // 外部链接
    },
    {
      id: 4,
      title: '关于友谊的随笔',
      date: '2025年4月5日',
      category: '随笔',
      summary: '朋友是人生路上最美的风景，他们陪伴我们走过人生的每一个阶段，分享我们的快乐和悲伤...',
      content: '朋友是人生路上最美的风景，他们陪伴我们走过人生的每一个阶段，分享我们的快乐和悲伤。真正的友谊不需要刻意维护，它会在时间的沉淀中变得更加珍贵。',
      tags: ['友谊', '生活', '情感'],
      link: 'https://blog.example.com/friendship-essay' // 外部链接
    }
  ],

  // 旅游地图数据
  travelMap: [
    {
      id: 1,
      city: '上海',
      location: [31.2304, 121.4737],
      date: '2025年7月',
      title: '魔都生活',
      description: '在上海生活了几年，这座城市教会了我什么是快节奏，什么是包容。',
      image: '/images/travel/shanghai.jpg',
      memories: '第一次来到上海时，被这座城市的繁华震撼。现在，我已经习惯了这里的生活节奏，也爱上了这座城市的文化底蕴。',
      photos: [
        '/images/travel/shanghai1.jpg',
        '/images/travel/shanghai2.jpg',
        '/images/travel/shanghai3.jpg'
      ]
    },
    {
      id: 2,
      city: '杭州',
      location: [30.2741, 120.1551],
      date: '2025年5月',
      title: '西湖春游',
      description: '春天的西湖美不胜收，樱花盛开，游人如织。',
      image: '/images/travel/hangzhou.jpg',
      memories: '西湖的美是无法用语言描述的，特别是春天的西湖。漫步在苏堤上，看着湖光山色，仿佛置身于诗画之中。',
      photos: [
        '/images/travel/hangzhou1.jpg',
        '/images/travel/hangzhou2.jpg',
        '/images/travel/hangzhou3.jpg'
      ]
    },
    {
      id: 3,
      city: '苏州',
      location: [31.2990, 120.5853],
      date: '2025年4月',
      title: '园林之美',
      description: '苏州园林的精美绝伦，让人流连忘返。',
      image: '/images/travel/suzhou.jpg',
      memories: '苏州园林是中国园林艺术的精华，每一处设计都体现了古人的智慧。在拙政园里漫步，仿佛穿越回了古代。',
      photos: [
        '/images/travel/suzhou1.jpg',
        '/images/travel/suzhou2.jpg',
        '/images/travel/suzhou3.jpg'
      ]
    },
    {
      id: 4,
      city: '南京',
      location: [32.0603, 118.7969],
      date: '2025年3月',
      title: '古都风情',
      description: '南京的历史厚重感让人肃然起敬，每一处古迹都有故事。',
      image: '/images/travel/nanjing.jpg',
      memories: '南京是一座有故事的城市，从明城墙到夫子庙，每一处都承载着深厚的历史文化。在这里，我感受到了历史的厚重。',
      photos: [
        '/images/travel/qingdao.jpg',
        '/images/travel/qingdao.jpg',
        '/images/travel/nanjing3.jpg'
      ]
    },

  ]
}; 