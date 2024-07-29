import {DiHtml5, DiReact} from "react-icons/di";
import {FaNodeJs, FaReact,FaJs,FaCss3Alt,FaPython,FaMicrophone} from "react-icons/fa";
import {SiExpress,SiMongodb,SiFlask,SiGoogleassistant,SiSpringboot,SiSpringsecurity,Sib} from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { FaJava } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiRedis } from 'react-icons/si';
// BeautifulSoupIcon.js
import React from 'react';

const BeautifulSoupIcon = ({ color = 'green', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
    <path d="M16.71 7.29a1.003 1.003 0 00-1.42-1.42L12 8.17l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L10.83 12l-3.29 3.29a1.003 1.003 0 001.42 1.42L12 15.83l3.29 3.29a1.003 1.003 0 001.42-1.42L13.17 12l3.54-3.71z"/>
  </svg>
);

// export default BeautifulSoupIcon;

export const menu = [
    {name:"About",offset: -20},
    {name:"Skills",offset: 70},
    {name:"Projects",offset: 60},
    {name:"Certificates",offset: 60},
    {name:"Contact",offset: 60},
]





export const projects = [
  { 
    id: 1,
    title: 'Blogging Application',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-bloggingapp.png',
    category: "FullStack",
    data: {
       description: `Unleash the power of storytelling with our Blogging Application. 
                     Seamlessly designed for writers and readers, our platform offers 
                     intuitive navigation, customizable templates, and real-time 
                     collaboration. Elevate your blogging experience and captivate your 
                     audience with engaging content.`,
       demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ]
  },
  {
    id: 2,
    title: 'Real Time Chat App',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-chatapp.png',
    category: "FullStack",
    data: {
      description: `Enhance communication with our Real Time Chat App. Seamlessly designed 
                    for instant messaging, our app offers real-time notifications, 
                    multimedia sharing, and secure conversations. Experience the future 
                    of connectivity and stay connected with your peers effortlessly.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React",
        icon: <FaReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ]
  },
  {
    id: 3,
    title: 'Document Security Platform',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-documentsecurity.png',
    category: "FullStack",
    data: {
      description: `This platform serves as a centralized solution for securely storing, 
                    organizing, and managing documents across users and roles, ensuring 
                    streamlined document management with robust security measures and 
                    adherence to data protection regulations. Implements role-based access 
                    control (RBAC) to manage user permissions based on roles. This ensures 
                    that only authorized personnel can view, edit, or manage specific 
                    documents, enhancing security and confidentiality. Enhances security 
                    by multi-factor authentication before granting access to the platform. 
                    MFA adds an extra layer of protection against unauthorized access 
                    attempts, thereby safeguarding sensitive documents.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "SpringBoot",
        icon: <SiSpringboot />,
        iconColor: "green",
      },
      {
        name: "Spring Security",
        icon: <SiSpringsecurity />,
        iconColor: "lightgreen",
      },
      {
        name: "MySQL",
        icon: <GrMysql />,
        iconColor: "blue",
      },
    ]
  },
  {
    id: 4,
    title: 'PeerToPeer Learning Platform',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-p2plearning.png',
    category: "FullStack",
    data: {
      description: `Empower education with our PeerToPeer Learning Platform. Seamlessly 
                    connecting learners and educators, our platform offers collaborative 
                    tools, personalized learning paths, and real-time feedback. Transform 
                    the way knowledge is shared and acquired, fostering a dynamic learning 
                    environment.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "SpringBoot",
        icon: <SiSpringboot />,
        iconColor: "green",
      },
      {
        name: "MySQL",
        icon: <GrMysql />,
        iconColor: "blue",
      },
      {
        name: "Redis",
        icon: <SiRedis />,
        iconColor: "red",
      },
    ]
  },
  {
    id: 5,
    title: 'Netflix Clone',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-netflixclone.png',
    category: "Frontend",
    data: {
      description: `Experience seamless streaming with our Netflix Clone. Designed to 
                    offer a user-friendly interface and smooth performance, our clone 
                    brings the best of video content to your fingertips. Dive into a 
                    world of entertainment with intuitive navigation and personalized 
                    recommendations.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        iconColor: "blue",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        iconColor: "yellow",
      },
    ]
  },
  {
    id: 6,
    title: 'Travel Website',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-travelwebsite.png',
    category: "Frontend",
    data: {
      description: `Discover your next adventure with our Travel Website. Seamlessly 
                    designed for travel enthusiasts, our platform offers stunning visuals, 
                    easy navigation, and comprehensive travel guides. Plan your perfect 
                    trip and explore the world with our intuitive travel site.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "HTML",
        icon: <DiHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        iconColor: "blue",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        iconColor: "yellow",
      },
    ]
  },

  {
    id: 7,
    title: 'Desktop Assistant with Voice Recognition',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-desktopassistant.png',
    category: "Python",
    data: {
      description: `Interact effortlessly with your computer using our Desktop Assistant 
                    with Voice Recognition. Designed to understand and execute voice commands, 
                    this assistant offers features like web search, application control, and 
                    reminders, making your digital interaction seamless.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Python",
        icon: <FaPython />,
        iconColor: "blue",
      },
      {
        name: "SpeechRecognition",
        icon: <SiGoogleassistant />,
        iconColor: "orange",
      },
      {
        name: "Pyttsx3",
        icon: <FaMicrophone />,
        iconColor: "grey",
      },
    ]
  },
  {
    id: 8,
    title: 'Web Scraper',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-webscraper.png',
    category: "Python",
    data: {
      description: `Extract valuable data from websites with our Web Scraper tool. 
                    Designed to collect and organize data efficiently, this tool supports 
                    features like dynamic content handling, data export, and scheduling 
                    for automated scraping tasks.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Python",
        icon: <FaPython />,
        iconColor: "blue",
      },
      {
        name: "BeautifulSoup",
        icon: <BeautifulSoupIcon />,
        iconColor: "green",
      },
    ]
  },
  {
    id: 9,
    title: 'Payroll Management System',
    image: 'https://cdn.dribbble.com/userupload/1234567/file/original-payrollmanagement.png',
    category: "Python",
    data: {
      description: `Streamline your payroll processes with our Payroll Management application. 
                    Built using Python Flask framework, this tool offers features like employee 
                    data management, salary calculation, and automated report generation to 
                    ensure efficient and accurate payroll handling.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Python",
        icon: <FaPython />,
        iconColor: "blue",
      },
      {
        name: "Flask",
        icon: <SiFlask />,
        iconColor: "black",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ]
  },
];



export const experience = [   
    {
        title:"Frontend Development",
        data:[
              {
                  skill:"ReactJS",
                  level:"Experienced",
              },
              {
                  skill:"JavaScript",
                  level:"Intermediate",
              },
              {
                skill:"TypeScript",
                level:"Intermediate",
            },
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            
            {
                skill:"Tailwind",
                level:"Intermediate",
            },
            {
                skill:"Bootstrap",
                level:"Experienced",
            },
            
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
              skill:"Spring Boot",
              level:"Intermediate",
          },
            {
              skill:"Node JS",
              level:"Intermediate",
            },
            {
                skill:"MongoDB",
                level:"Intermediate",
            },
            
            {
                skill:"MySQL",
                level:"Experienced",
            },
            
        ]
    },
    {
      title:"Development Tools",
      data:[
          {
              skill:"Postman API",
              level:"Experienced",
          },
          {
              skill:"VS Code",
              level:"Experienced",
          },
          {
              skill:"IntelliJ IDEA",
              level:"Experienced",
          },
      ]
  },
  {
    title:"Programming Languages",
    data:[
        {
            skill:"Java",
            level:"Experienced",
        },
        {
            skill:"Python",
            level:"Intermediate",
        },
        {
            skill:"c++",
            level:"Experienced",
        },
    ]
},
  
]


export const socialHandles = [
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"",
  },
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<AiFillYoutube/>,
    link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];