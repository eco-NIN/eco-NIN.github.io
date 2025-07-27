# 个人学术主页

一个基于 React + Tailwind CSS 构建的现代化学术个人主页，采用毛玻璃设计风格，支持响应式布局和多语言国际化。

## ✨ 主要功能

### 🏠 学术主页 (Homepage)
- **两栏布局**：左侧个人信息，右侧学术内容
- **个人信息**：头像、姓名、简介、联系方式
- **学术内容**：研究方向、教育背景、工作经验、最新动态
- **响应式设计**：桌面端两栏，移动端单栏

### 🏡 首页 (Home)
- **个人介绍**：头像、姓名、标题、简介
- **时间线展示**：可滑动的日程安排卡片
- **状态标识**：已完成、进行中、即将开始
- **动态效果**：平滑的动画过渡

### 📚 研究页面 (Research)
- **研究方向**：详细的研究领域介绍
- **论文发表**：学术成果展示
- **项目经历**：研究项目时间线
- **获奖荣誉**：学术成就展示

### 💻 项目页面 (Projects)
- **项目展示**：技术项目详细介绍
- **技能标签**：技术栈展示
- **项目链接**：GitHub、演示链接
- **时间线**：项目发展历程

### 🌟 生活页面 (Life)
- **照片轮播**：生活剪影自动轮播展示
- **随笔预览**：一行一篇文章的简洁展示
- **点击动效**：悬停和点击的丰富动画效果
- **旅游地图**：足迹展示（支持多种地图样式）
- **分类筛选**：按类别浏览内容

### 📝 随笔页面 (Essays)
- **完整文章列表**：所有随笔的详细展示
- **搜索功能**：按标题、内容、标签搜索
- **分类筛选**：按文章分类浏览
- **排序功能**：按日期、标题、分类排序
- **响应式设计**：适配各种屏幕尺寸

### 📞 联系页面 (Contact)
- **联系信息**：邮箱、电话、地址
- **社交媒体**：GitHub、LinkedIn等
- **联系表单**：在线留言功能
- **地图定位**：地理位置展示

### 📄 CV页面 (CV)
- **教育背景**：学历信息
- **工作经验**：职业经历
- **技能展示**：专业技能列表
- **证书荣誉**：资格证书和奖项

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── HomepageComponents/  # 首页相关组件
│   ├── AcademicComponents/  # 学术页面组件
│   └── PhotoCarousel.jsx    # 照片轮播组件
├── config/             # 配置文件
│   ├── academicProfile.js   # 学术主页配置
│   ├── researchConfig.js    # 研究页面配置
│   ├── projectsConfig.js    # 项目页面配置
│   ├── lifeConfig.js        # 生活页面配置
│   ├── contactConfig.js     # 联系页面配置
│   ├── cvConfig.js          # CV页面配置
│   ├── homeConfig.js        # 首页配置
│   └── index.js             # 配置统一导出
├── pages/              # 页面组件
│   ├── Essays.jsx          # 随笔页面
│   └── ...                 # 其他页面
├── i18n/               # 国际化文件
└── assets/             # 静态资源
```

## ⚙️ 配置说明

### 学术主页配置 (`academicProfile.js`)
```javascript
export const academicProfile = {
  name: "Your Name",
  title: "PhD Candidate, Computer Science",
  institution: "Shanghai Jiao Tong University",
  location: "Shanghai, China",
  bio: "学术简介...",
  imageUrl: "/images/profile.jpg",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    scholar: "https://scholar.google.com/citations?user=yourid",
    email: "mailto:your.email@sjtu.edu.cn",
    orcid: "https://orcid.org/0000-0000-0000-0000"
  },
  researchInterests: [
    { title: "Machine Learning", description: "..." },
    // ...
  ],
  education: [
    { degree: "PhD in Computer Science", institution: "SJTU", year: "2021 - Present" },
    // ...
  ],
  experience: [
    { title: "Research Assistant", institution: "SJTU", period: "2021 - Present", description: "..." },
    // ...
  ],
  recentUpdates: [
    { title: "Paper accepted", description: "...", date: "March 2024" },
    // ...
  ]
};
```

### 研究页面配置 (`researchConfig.js`)
```javascript
export const researchConfig = {
  researchDirections: [
    {
      title: "研究方向标题",
      description: "详细描述...",
      keywords: ["关键词1", "关键词2"],
      publications: ["论文1", "论文2"]
    }
  ],
  publications: [
    {
      title: "论文标题",
      authors: "作者列表",
      journal: "期刊名称",
      year: "2024",
      doi: "DOI链接"
    }
  ],
  projects: [
    {
      title: "项目名称",
      description: "项目描述",
      period: "2023-2024",
      role: "项目角色",
      technologies: ["技术1", "技术2"]
    }
  ],
  awards: [
    {
      title: "奖项名称",
      organization: "颁发机构",
      year: "2024",
      description: "奖项描述"
    }
  ]
};
```

### 项目页面配置 (`projectsConfig.js`)
```javascript
export const projectsConfig = {
  projects: [
    {
      id: 1,
      title: "项目名称",
      description: "项目描述",
      technologies: ["React", "Node.js"],
      github: "GitHub链接",
      demo: "演示链接",
      image: "/images/project1.jpg",
      category: "Web开发",
      status: "completed"
    }
  ]
};
```

### 生活页面配置 (`lifeConfig.js`)
```javascript
export const lifeConfig = {
  // 生活剪影 - 用于照片轮播
  lifeMoments: [
    {
      id: 1,
      date: '2025-07-10',
      title: '活动标题',
      location: '地点',
      description: '活动描述',
      image: '/images/life/photo1.jpg',
      category: '学术',
      details: '详细描述...'
    }
  ],
  
  // 博客文章 - 用于随笔展示
  blogPosts: [
    {
      id: 1,
      title: '文章标题',
      date: '2025年7月15日',
      category: '感悟',
      summary: '文章摘要...',
      tags: ['标签1', '标签2'],
      link: '文章链接' // 可以是外部链接或内部路由
    }
  ],
  
  // 旅游地图数据
  travelMap: [
    {
      id: 1,
      city: '城市名',
      location: [纬度, 经度],
      date: '2025年7月',
      title: '旅行标题',
      description: '旅行描述',
      image: '/images/travel/city.jpg',
      memories: '旅行回忆',
      photos: ['照片1', '照片2', '照片3']
    }
  ]
};
```

### 联系页面配置 (`contactConfig.js`)
```javascript
export const contactConfig = {
  contactInfo: {
    email: "your.email@example.com",
    phone: "+86 123 4567 8900",
    address: "上海市闵行区东川路800号",
    location: [31.2304, 121.4737]
  },
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    wechat: "your_wechat_id"
  },
  officeHours: [
    { day: "周一", time: "9:00-11:00" },
    { day: "周三", time: "14:00-16:00" }
  ]
};
```

### CV页面配置 (`cvConfig.js`)
```javascript
export const cvConfig = {
  education: [
    {
      degree: "博士学位",
      institution: "学校名称",
      year: "2021-2024",
      gpa: "3.9/4.0",
      thesis: "论文题目"
    }
  ],
  experience: [
    {
      title: "职位名称",
      company: "公司名称",
      period: "2021-2024",
      description: "工作描述",
      achievements: ["成就1", "成就2"]
    }
  ],
  skills: {
    technical: ["技能1", "技能2"],
    languages: ["语言1", "语言2"],
    tools: ["工具1", "工具2"]
  },
  certifications: [
    {
      name: "证书名称",
      issuer: "颁发机构",
      year: "2024",
      credential: "证书编号"
    }
  ]
};
```

### 首页配置 (`homeConfig.js`)
```javascript
export const homeConfig = {
  basicInfo: {
    name: 'Your Name',
    title: '学术个人主页',
    intro: '欢迎来到我的学术主页。我是一名专注于人工智能与机器学习领域的研究者。',
    photoAlt: '个人照片',
  },
  timeline: [ // 时间线日程安排
    {
      id: 1,
      date: '2024年3月',
      title: '论文投稿',
      description: '向ICML 2024提交最新研究成果',
      status: 'upcoming', // completed, ongoing, upcoming
      category: 'research'
    }
  ],
};
```

## 🎨 自定义样式

### 主题色彩
在 `tailwind.config.js` 中修改主题色彩：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
      }
    }
  }
}
```

### 毛玻璃效果
使用 `.glass` 类应用毛玻璃效果：
```css
.glass {
  @apply bg-white/30 backdrop-blur-2xl rounded-xl border border-white/20 shadow-lg transition-all duration-300;
}
```

## 📱 响应式设计

- **桌面端**：完整布局，两栏设计
- **平板端**：适配中等屏幕
- **手机端**：单栏布局，优化触摸体验

## 🌐 国际化支持

支持中英文切换，配置文件位于 `src/i18n/` 目录。

## 🚀 部署

### GitHub Pages
1. 构建项目：`npm run build`
2. 推送到 GitHub
3. 在仓库设置中启用 GitHub Pages

### Vercel
1. 连接 GitHub 仓库
2. 自动部署

### Netlify
1. 拖拽 `dist` 文件夹到 Netlify
2. 或连接 Git 仓库自动部署

## 🛠️ 技术栈

- **前端框架**：React 18
- **样式框架**：Tailwind CSS
- **动画库**：Framer Motion
- **图标库**：React Icons
- **构建工具**：Vite
- **开发语言**：JavaScript/JSX

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**：请根据实际情况修改配置文件中的个人信息和内容。
