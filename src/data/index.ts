import type {ProjectTypes, ServicesIprop} from "../interfaces/index"
import { IMAGES } from '../config/assets';
import {
  BsCodeSlash,
  BsLightningChargeFill,
  BsGraphUp,
  BsRobot,
  BsCpu,
  BsPeople
} from 'react-icons/bs';
export const dataProject: ProjectTypes[] = [
  {
    title: "E-LearnReactApp",
    image:IMAGES.elearn,
    description:"A responsive e-learning platform with course browsing and user authentication, built using React and integrated with Strapi CMS. Features include dynamic routing, form validation, and performance optimizations using modern React tools.",
    category:"react-app",
    githubLink:"https://github.com/mariamelsaka/E-LearnReactApp",
    liveDemoLink:"https://elearningapp1.netlify.app/login",
    skills:["html","css","tailwind css","bootstrap","react"]   
  },
  {
    title: "Video Science App",
    image:IMAGES.videoscience,
    description:"A content platform for viewing science videos, podcasts, and blogs. Includes a full admin dashboard to manage content and users, with authentication and role-based access for admins and users.",
    category:"web-app",
    githubLink:"https://github.com/mariamelsaka/VideoSCV11",
    liveDemoLink:"https://mariamelsaka.github.io/egyscience/" ,
    skills:["html","css","bootstrap 5"]  
  },

    {
    title: "Online Quiz Maker",
    image:IMAGES.quizMaker,
    description:"A platform where admins can create quizzes via a dashboard, and users can take quizzes and view their progress. The project includes user authentication and authorization. Built using front-end technologies with optional Laravel back-end. \n Note: The deployed version does not support admin dashboard",
    category:"web-app",
    githubLink:"https://github.com/mariamelsaka/quizApp",
    liveDemoLink:"https://quizmaker2.netlify.app/" ,
    skills:["html","css","bootstrap 5","javascript","PHP","Laravel"]   
  },
    {
    title: "Music Podcast App",
    image:IMAGES.music,
    description:"A JavaScript-based app that lets users browse podcasts by category and play episodes on a dedicated details page. The app demonstrates dynamic data handling using local JSON, category filtering, and audio playback—all without a backend.",
    category:"js-app",
    githubLink:"https://github.com/mariamelsaka/music-app",
    liveDemoLink:"https://mariamelsaka.github.io/music-app/",
    skills:["html","css","javascript"]  
  },
  {
    title: "CodSoft Internship – Level 1 Tasks",
    // title: "differents landing page",
    image:IMAGES.codeSoft,
    description:"As part of the CodSoft internship, I completed three web development tasks: a personal portfolio page, a responsive landing page, and a functional calculator. My goal was to reinforce my existing web development skills and maintain consistency in practicing front-end technologies.",
    category:"landing-page",
    githubLink:"https://github.com/mariamelsaka/codesoft_level1",
    liveDemoLink:"https://mariamelsaka.github.io/codesoft_level1/",
    skills:["html","css","bootstrap 5","javascript"]    
  },
  {
    title: "Simple Website — Home & Contact Us",
    image:IMAGES.webTask,
    description:"This was my very first task — a clean, responsive website featuring a welcoming landing page and a contact form for user inquiries. Highlights include smooth navigation, accessible structure, and a modern, mobile-friendly design.",
    category:"landing-page",
    liveDemoLink:"https://mariamelsaka.github.io/web-design-task/",
    githubLink:"https://github.com/mariamelsaka/web-design-task",
    skills:["html","css","bootstrap 4"]  
  },

  {
    title: "Graduation Project: Arabic Sign Language Educational Website",
    image:IMAGES.gradPro,
    description:"An AI-powered educational platform that teaches Arabic sign language through videos, articles, and a real-time quiz using camera input. Built with a CNN model (ResNet architecture) integrated via TensorFlow, OpenCV, and MediaPipe to provide interactive learning and gesture recognition.",
    category:"web-app",
    githubLink:"https://github.com/mariamelsaka/realtime_signlan_flask",
    liveDemoLink:"https://www.linkedin.com/posts/mariam-elsaka-7a0138218_im-very-glad-that-i-have-graduated-from-activity-7091496302479384576-YH9H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbWOWgBpu6VrINbXqVpwg7U903lbRjIb6w" ,
    skills:["TensorFlow","ResNet","opencv","MediaPipe","flask"]   
  },
];

export const CustomServices: ServicesIprop[] = [
  {
    title: "Front-End Development",
    icon: BsCodeSlash, // Best fit for coding/front-end
    description: `I build responsive, interactive websites using HTML, CSS, JavaScript, Bootstrap, and Tailwind.\nI focus on pixel-perfect UI implementation from Figma or other design tools.`
  },
  {
    title: "React/TypeScript Development",
    icon: BsCpu, // Symbolizes logic, components, and development power
    description: `I develop fast, scalable Single Page Applications (SPAs) using React, React Router, React Hooks, and TypeScript.\nMy approach emphasizes clean component architecture and optimized performance.`
  },
  {
    title: "Dashboard & Admin Panel UI",
    icon: BsGraphUp, // Represents analytics/dashboards
    description: "I create complex and user-friendly admin dashboards tailored to business needs, using Liferay or any technology of your choice."
  },
  {
    title: "Chatbot Development with Low-Code & Integration",
    icon: BsRobot, // Represents AI/chatbots
    description: "I integrate AI-powered chatbots into websites using Kore.ai or other platforms, leveraging low-code tools to streamline development and enhance user interaction."
  },
  {
    title: "Performance Optimization",
    icon: BsLightningChargeFill, // Symbol of speed and power
    description: "I write clean, optimized front-end code to ensure fast load times, better performance, and full compatibility across all modern devices and browsers."
  },
  {
    title: "Front-End Mentoring / Workshops",
    icon: BsPeople, // Represents mentoring, workshops, and teamwork
    description: "I led front-end workshops for 50+ students, focusing on HTML, CSS, and JavaScript fundamentals. Sessions included hands-on guidance, live coding, and real-world project building."
  }
];