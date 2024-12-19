import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    vosyn,
    tibicle,
    payment,
    chatbot,
    globe2
  } from "../assets";


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "ML/AI Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend/ML Developer(Intern)",
      company_name: "Vosyn",
      icon: vosyn,
      iconBg: "#383E56",
      date: "Oct 2024 - Present",
      points: [
        "Developed features such as a timer for the video player and an email notification system using Flutter and Hive.",
        "Additionally, contributed to the development of a team registration website using WordPress.",
        "Integrated machine learning models with user-friendly front-end interfaces, ensuring seamless functionality and an engaging user experience."
      ],
      
    },
    {
      title: "Full Stack Developer",
      company_name: "Tibicle LLP",
      icon: tibicle,
      iconBg: "#E6DEDD",
      date: "May 2019 - Dec 2023",
      points: [
        "Designed and developed scalable web applications using Angular, integrating Java-based backend services via RESTful APIs for seamless client-server communication.",
        "Created microservices architectures with Spring Boot, Docker, and Kubernetes, ensuring high availability and scalability in production.",
        "Implemented NgRx for state management and built CI/CD pipelines with Git, GitHub, and Jenkins to automate deployments and enhance application performance."
      ],
      
    },
    // {
    //   title: "Software Developer Intern",
    //   company_name: "LDCE",
    //   icon: ldce_logo,
    //   iconBg: "#383E56",
    //   date: "May 2022 - September 2022",
    //   points: [
    //     " Led digitalization of the student portal, automating certificate verification and generation for 6,000 students and alumni.",
    //     "Engineered and deployed 14 features, including automatic data filling and dynamic form creation, enhancing user experience and efficiency in 4 months via REST APIs using Agile development lifecycle",
    //     "Technologies: React, Redux, CSS, Axios, jQuery, Mocha, Jest, Node.js, Express, MongoDB, CORS, Git.",
    //   ],
    // },
    // {
    //   title: "Full Stack Developer Intern",
    //   company_name: "Coders Club",
    //   icon: coders,
    //   iconBg: "#E6DEDD",
    //   date: "Aug 2020 - Oct 2020",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
        
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Payment Management",
      description:
        "Tech Stack: Angular, Python, Flask, MongoDB, Tailwind CSS. Used git for the version control",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: payment,
      source_code_link: "https://github.com/Foram2248/payment-management-app",
    },
    {
      name: "FirstAidGPT",
      description:
        "FirstAidGPT can help users by giving detailed instructions on providing first aid in various situations. Before expert medical assistance arrives, it can assist users in assessing the situation, identifying injuries or symptoms, and suggesting the best course of action.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Artificial Intelligence",
          color: "green-text-gradient",
        },
        {
          name: "BioBert",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/Foram2248",
    },
    {
      name: "GlobetrotterApp",
      description:
        "GlobetrotterApp is a travel booking application that provides users with a seamless experience for booking flights, selecting seats, managing boarding passes. The app features a user-friendly interface to enter passenger details, select travel locations, and choose cabin class.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: globe2,
      source_code_link: "https://github.com/Foram2248/GlobetrotterApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };