// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'DevFinder - Github User Search',
    shortDescription:
      'A modern web application built with Next.js 14 that allows users to search and explore GitHub profiles. Features include user details, repository stats, and a clean, responsive UI with dark/light theme support.',
    cover:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3',
    type: 'Personal Project 🚀',
    livePreview: 'https://devfinder-git-main-myselfdebajyoti.vercel.app/',
    githubLink: 'https://github.com/MyselfDeb/devfinder',
    githubStars: '5 Stars',
  },
  {
    priority: 2,
    title: 'Web Wizards Community Website',
    shortDescription:
      'The official website for Web Wizards, our college coding community. Built with Next.js and TailwindCSS, featuring event showcases, member profiles, and a dynamic blog section. Integrated with a custom CMS for easy content management.',
    cover:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    type: 'Community Project 👥',
    livePreview: 'https://webwiznitr.vercel.app/',
    githubLink: 'https://github.com/webwiznitr/webwiz-portfolio',
    githubStars: '10 Stars',
  },
  {
    priority: 3,
    title: 'TaskFlow - Project Management',
    shortDescription:
      'A full-stack project management tool built with the MERN stack. Features include real-time updates with Socket.io, drag-and-drop task management, team collaboration tools, and JWT authentication.',
    cover:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    type: 'Full Stack Project ⚡',
    livePreview: 'https://taskflow-management.vercel.app/',
    githubLink: 'https://github.com/MyselfDeb/taskflow',
    githubStars: '8 Stars',
  },
  {
    priority: 4,
    title: 'AI Image Generator',
    shortDescription:
      'An innovative AI-powered image generation platform using the DALL-E API. Built with Next.js and Node.js, featuring secure authentication, image history, and social sharing capabilities. Implements prompt engineering for better results.',
    cover:
      'https://images.unsplash.com/photo-1675274477731-072a8ce16c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    type: 'AI Project 🤖',
    livePreview: 'https://ai-image-generator-myselfdev.vercel.app/',
    githubLink: 'https://github.com/MyselfDeb/ai-image-generator',
    githubStars: '6 Stars',
  },
]

// Service Data
export const serviceData = [
  {
    icon: SocketIcon,
    title: 'Socket.io Real-Time Apps',
    shortDescription:
      'Creating dynamic and interactive web applications using Socket.io for real-time communication.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: ExpressjsIcon,
    title: 'Express.js Backend',
    shortDescription: 'Developing RESTful APIs and server-side logic with Express.js.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '/' },
  { title: 'Projects', href: '#projects' },

  {
    title: 'Services',
    href: '#services',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
