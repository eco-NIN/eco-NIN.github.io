# 学术个人主页

一个基于 React + Tailwind CSS 构建的现代化学术个人主页，参考 academicpages 的设计风格。

## 功能特性

- 🎓 **学术风格设计** - 专业的学术主页布局
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎨 **现代化UI** - 使用 Tailwind CSS 构建的简洁美观界面
- ⚡ **快速加载** - 基于 Vite 构建，加载速度快
- 🔧 **易于定制** - 通过配置文件轻松修改个人信息
- 📝 **完全可配置** - 所有页面内容都通过配置文件管理

## 主要组件

### 个人信息模块 (ProfileHeader)
- 姓名和学术头衔
- 所属机构
- 个人简介
- 头像照片
- 社交链接 (GitHub, LinkedIn, Google Scholar, Email)

### 研究方向模块 (ResearchInterests)
- 展示主要研究领域
- 每个研究方向包含标题和描述
- 响应式网格布局

### 最新动态模块 (RecentUpdates)
- 展示学术成果和最新动态
- 包含时间线样式
- 支持论文发表、会议报告等更新

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 自定义个人信息
编辑 `src/config/` 目录下的配置文件：

#### 首页配置 (`homeConfig.js`)
```javascript
export const homeConfig = {
  basicInfo: {
    name: "Your Name",
    title: "学术个人主页",
    intro: "欢迎来到我的学术主页。我是一名专注于人工智能与机器学习领域的研究者。",
    photoAlt: "个人照片"
  },
  education: [
    {
      degree: "PhD in Computer Science",
      institution: "Your University",
      period: "2020-Present"
    }
  ],
  awards: [
    {
      title: "Your Award"
    }
  ]
};
```

#### 学术主页配置 (`academicProfile.js`)
```javascript
export const academicProfile = {
  name: "Your Name",
  title: "PhD Candidate, Computer Science",
  institution: "Shanghai Jiao Tong University",
  bio: "Your personal introduction...",
  imageUrl: "/images/profile.jpg",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    scholar: "https://scholar.google.com/citations?user=yourid",
    email: "mailto:your.email@sjtu.edu.cn"
  },
  // ... 其他配置
};
```

#### 研究页面配置 (`researchConfig.js`)
```javascript
export const researchConfig = {
  researchDirections: [
    {
      title: "Your Research Area",
      description: "Description of your research..."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Your Project",
      description: "Project description...",
      period: "2022-Present",
      funding: "Funding source..."
    }
  ],
  publications: [
    {
      id: 1,
      title: "Your Paper Title",
      authors: "Authors...",
      journal: "Journal Name",
      year: 2023,
      doi: "https://doi.org/...",
      bibtex: true
    }
  ]
};
```

#### 项目页面配置 (`projectsConfig.js`)
```javascript
export const projectsConfig = {
  projects: [
    {
      id: 1,
      title: "Your Project",
      description: "Project description...",
      githubUrl: "https://github.com/...",
      demoUrl: "https://demo.com",
      techStack: ["React", "Node.js"],
      image: "project-image.jpg"
    }
  ]
};
```

#### 生活页面配置 (`lifeConfig.js`)
```javascript
export const lifeConfig = {
  blogPosts: [
    {
      id: 1,
      title: "Your Blog Post",
      excerpt: "Post excerpt...",
      date: "January 2024",
      image: "blog-image.jpg"
    }
  ],
  travelLocations: [
    { id: 1, name: "City, Country", date: "January 2024" }
  ],
  photos: ["photo1.jpg", "photo2.jpg"]
};
```

#### 联系页面配置 (`contactConfig.js`)
```javascript
export const contactConfig = {
  contactInfo: {
    email: "your.email@institution.edu",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    googleScholar: "https://scholar.google.com/...",
    website: "https://yourwebsite.com",
    address: "Your address...",
    mapUrl: "Google Maps embed URL"
  }
};
```

#### CV页面配置 (`cvConfig.js`)
```javascript
export const cvConfig = {
  basicInfo: {
    name: "Your Name",
    title: "Your Title",
    cvFile: "/cv.pdf"
  },
  education: [
    {
      degree: "PhD in Computer Science",
      institution: "Your University",
      period: "2020-Present",
      details: "Thesis: Your thesis topic"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: "Python, JavaScript, Java"
    }
  ],
  publications: [
    "Your publication citation..."
  ]
};
```

### 3. 添加头像和文件
- 将头像照片放在 `public/images/profile.jpg`
- 将CV文件放在 `public/cv.pdf`

### 4. 启动开发服务器
```bash
npm run dev
```

### 5. 构建生产版本
```bash
npm run build
```

## 项目结构

```
src/
├── components/
│   └── AcademicComponents/
│       ├── ProfileHeader.jsx      # 个人信息头部组件
│       ├── ResearchInterests.jsx  # 研究方向组件
│       └── RecentUpdates.jsx      # 最新动态组件
├── config/
│   ├── homeConfig.js              # 首页配置
│   ├── academicProfile.js         # 学术主页配置
│   ├── researchConfig.js          # 研究页面配置
│   ├── projectsConfig.js          # 项目页面配置
│   ├── lifeConfig.js              # 生活页面配置
│   ├── contactConfig.js           # 联系页面配置
│   ├── cvConfig.js                # CV页面配置
│   └── index.js                   # 配置统一导出
├── pages/
│   ├── Homepage.jsx              # 学术主页
│   ├── Research.jsx              # 研究页面
│   ├── Projects.jsx              # 项目页面
│   ├── Life.jsx                  # 生活页面
│   ├── Contact.jsx               # 联系页面
│   └── CV.jsx                    # CV页面
└── ...
```

## 配置文件说明

### 首页配置
- **基本信息**: 姓名、标题、介绍文字
- **教育背景**: 学历信息
- **获奖荣誉**: 奖项和荣誉

### 学术主页配置
- **基本信息**: 姓名、头衔、机构、简介
- **社交链接**: GitHub、LinkedIn、Google Scholar、Email等
- **研究方向**: 研究领域和描述
- **最新动态**: 学术成果和更新
- **教育背景**: 学历信息
- **工作经验**: 工作经历

### 研究页面配置
- **研究方向**: 主要研究领域
- **研究项目**: 当前和已完成的项目
- **发表论文**: 学术论文列表

### 项目页面配置
- **项目信息**: 项目标题、描述、技术栈
- **链接**: GitHub链接和演示链接
- **图片**: 项目截图

### 生活页面配置
- **博客文章**: 个人博客文章
- **旅行地点**: 访问过的城市
- **照片画廊**: 个人照片

### 联系页面配置
- **联系信息**: 邮箱、地址
- **社交链接**: 各种社交媒体链接
- **地图**: Google Maps嵌入

### CV页面配置
- **基本信息**: 姓名、头衔、CV文件
- **教育背景**: 学历信息
- **技能**: 技术技能和语言能力
- **论文**: 精选论文列表

## 部署

### GitHub Pages 部署
1. 修改 `package.json` 中的 `homepage` 字段为你的 GitHub Pages URL
2. 运行部署命令：
```bash
npm run deploy
```

### 其他平台部署
构建项目后，将 `dist` 文件夹部署到你的托管平台。

## 技术栈

- **React 19** - 前端框架
- **Tailwind CSS** - 样式框架
- **Vite** - 构建工具
- **React Icons** - 图标库
- **React Router** - 路由管理
- **Framer Motion** - 动画库

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
