/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "KiWon's Portfolio",
  description: "Hello, I'm KiWon Lee",
  og: {
    title: "LEE KI WON Portfolio",
    type: "website",
    url: "http://prayfor-ee.github.io",
  },
};

//Home Page
const greeting = {
  title: "LEE KI WON Portfolio",
  logo_name: "LEE KI WON",
  nickname: "prayfor.ee",
  subTitle: `Hello, I'm KiWon Lee. 
    I'm a embedded software developer. 
    I think the item I developed can help someone, and I always do my best anywhere for it.`,
  portfolio_repository: "https://github.com/prayfor-ee/prayfor-ee.github.io",
  githubProfile: "https://github.com/prayfor-ee",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/prayfor-ee",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kiwon-lee-8b7b5877/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:prayfor.ee@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_kiwon_lee/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Instagram",
    link: "https://kiwonlee23.blogspot.com/",
    fontAwesomeIcon: "fa-blogger", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#B7F0B1", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Development & Study",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience with large-scale C/C++ projects (including QT/QML)",
        "⚡ Development of an AVN(audio-video navigation) application.",
        "⚡ Development of Automation Verification Framework(Integration of WhiteBox + BlackBox)",
        "⚡ Development of WhiteBox + BlackBox Integrated Automation Verification Framework",
        "⚡ Development of CAT(Credit Authorization Terminal)",
        "⚡ Development of a tool that automatically detects memory leak/CPU load",
        "⚡ Development of Eclipse Plugins (RCP)",
        "⚡ Study on Robot software platforms(OPROS and ROS)",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "healthicons:c", //"logos-C",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "gg:c-plus-plus", //"logos-C++",
          // fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java", //"logos-Java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Embedded Linux",
          fontAwesomeClassname: "logos:linux-tux", //"logos-Linux",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "QT",
          fontAwesomeClassname: "logos:qt", //"logos-Linux",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Robot",
          fontAwesomeClassname: "icon-park-outline:robot-one", //"logos-Robot",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  mastersdegrees: [
    {
      title: "Kangwon National University (Master's degree)",
      subtitle: "Electronics and Communications Engineering",
      logo_path: "kangwon_logo.png",
      alt_name: "kangwon Univ",
      duration: "2013 - 2015",
      descriptions: [
        "⚡ I have studied mainly robot software platforms.",
        "⚡ Apart from this, I have done courses on Software Development.",
        "⚡ I have studied a national research project related to robots.",
        '⚡ I suggested "a bridge for exchanging data and services between heterogeneous robot software platforms" as my graduation thesis.',
      ],
      website_link: "http://kangwon.ac.kr",
    },
  ],
  bachelordegrees: [
    {
      title: "Kangwon National University (Bachelor's degree)",
      subtitle: "Electronics and Communications Engineering",
      logo_path: "kangwon_logo.png",
      alt_name: "kangwon Univ",
      duration: "2010 - 2015",
      descriptions: [
        "⚡ I did link process between a bachelor's degree and a master's degree.",
        "⚡ I have studied classes mainly for major subjects.",
        "⚡ I have studied a national research project related to robots.",
      ],
      website_link: "http://kangwon.ac.kr",
    },
  ],
};

const papers = {
  certifications: [
    {
      title: "OPRoS-ROS간 데이터 교환 및 서비스 호출을 위한 브리지",
      subtitle:
        "Journal of Institute of Control, Robotics and Systems(ICROS 2016), vol.22, no.2, pp. 153-161 (9 pages), 2016 - 2016.05.01",
      logo_path: "icros.gif",
      certificate_link: "http://icros.org/",
      alt_name: "",
      color_code: "#FFFFFF",
    },
    {
      title:
        "Bridge for Exchange of Data/Service between Robot Software Platforms - OPRoS and ROS",
      subtitle:
        "International Conference on Control, Automation and Systems (ICCAS 2015) - 2015.10.13",
      logo_path: "icros.gif",
      certificate_link: "http://icros.org/",
      alt_name: "",
      color_code: "#FFFFFF",
    },
    {
      title: "DocT - Document Management and Testing Tool for Robot Software",
      subtitle:
        "The 11th International Conference on Ubiquitous Robots and Ambient Intelligence (URAI 2014) - 2014.11.12",
      logo_path: "kros.gif",
      certificate_link: "http://kros.org/",
      alt_name: "",
      color_code: "#FFFFFF",
    },
  ],
};
// Experience Page
const experience = {
  title: "Career",
  subtitle: "Work",
  description:
    "I'm a embedded software developer. I worked as a developer for several companies. I mainly handled my work in an embedded Linux environment, but there are no restrictions on Windows development. I think the item I developed can help someone, and I always do my best anywhere for it.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title:
            "Embedded Software Developer (Embedded Linux C/C++, Windows Python, Java_Eclipse Plugins RCP)",
          company: "SureSoftTech",
          company_url: "https://www.suresofttech.com/",
          logo_path: "suresofttectlogo.gif",
          duration: "June 2018 - PRESENT",
          location: "Seoul, Korea",
          description:
            "I am developing a Graybox(GBox) framework for AVN(Audio-Video Navigation) automation verification in Linux environment.\n I am developing a Python program (Windows environment) to automatically allocate issues detected through GrayBox to developers through Jira.\n In addition, i developed and maintained tool for detecting memory leakage and CPU load in AVN (Linux C/C++ and Windows Eclipse Plugins RCP_Java).",
          color: "#0879bf",
        },
        {
          title: "Embedded Software Developer (Embedded Linux C/C++, QT, QML)",
          company: "MediaZen",
          company_url: "http://www.mediazen.co.kr/",
          logo_path: "mediazen.png",
          duration: "May 2017 - June 2018",
          location: "Seongnam, Korea",
          description:
            "I developed AVN(AudioNavigation) voice-recognition application (Linux QT) for vehicles (Platform Area: Europe, North America, and Korea)",
          color: "#9b1578",
        },
        {
          title: "Embedded Software Developer (Embedded Linux C/C++, QT, QML)",
          company: "SHC(신흥정밀)",
          company_url: "http://www.shc.co.kr/",
          logo_path: "shc.png",
          duration: "July 2016 - May 2017",
          location: "Seoul, Korea",
          description: "I developed CAT(Credit Authorization Terminal).",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have experienced various projects and tasks. My best experience was to be released as a real product. The product developed and distributed applications in embedded Linux environment.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kiwonlee.jpg",
    description: "If you need my help, please contact me by email.",
  },
  phoneSection: {
    title: "E-mail",
    subtitle: "prayfor.ee@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  papers,
  experience,
  projectsHeader,
  contactPageData,
};
