/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "KiWon's Portfolio",
  description:
    "Hello, I'm KiWon Lee. I'm a software developer. I think the item I developed can help someone, and I always do my best anywhere for it.",
  og: {
    title: "LEE KIWON Portfolio",
    type: "website",
    url: "http://prayfor-ee.github.io",
  },
};

//Home Page
const greeting = {
  title: "LEE KIWON Portfolio",
  logo_name: "LEE KI WON",
  nickname: "KiWon",
  subTitle: "Hello, I'm KiWon Lee. I'm a software developer.",
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
          fontAwesomeClassname: "ion-logo-python", //"logos-C",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "ion-logo-python", //"logos-C++",
          // fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "ion-logo-python", //"logos-Java",
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
          fontAwesomeClassname: "ion-logo-python", //"logos-Linux",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "QT",
          fontAwesomeClassname: "ion-logo-python", //"logos-Linux",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Robot",
          fontAwesomeClassname: "ion-logo-python", //"logos-Robot",
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
      title: "Kangwon National University",
      subtitle: "Electronics and Communications Engineering",
      logo_path: "kangwon.png",
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
      title: "Kangwon National University",
      subtitle: "Electronics and Communications Engineering",
      logo_path: "kangwon.png",
      alt_name: "kangwon Univ",
      duration: "2010 - 2015",
      descriptions: [
        "⚡ I did link process between a scholar and a master's degree.",
        "⚡ I have studied classes mainly for major subjects.",
        "⚡ I have studied a national research project related to robots.",
      ],
      website_link: "http://kangwon.ac.kr",
    },
  ],
};

// Experience Page
const experience = {
  title: "Career",
  subtitle: "Work",
  description:
    "I'm a software developer. I worked as a developer for several companies. I mainly handled my work in an embedded Linux environment, but there are no restrictions on Windows development. I think the item I developed can help someone, and I always do my best anywhere for it.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Embedded Linux & Windows Python Developer",
          company: "SureSoftTech",
          company_url: "https://www.suresofttech.com/",
          logo_path: "suresofttectlogo.gif",
          duration: "June 2018 - PRESENT",
          location: "Seoul, Korea",
          description:
            "I am developing a Graybox(GBox) framework for AVN(Audio-Video Navigation) automation verification in Linux environment.\n I am developing a Python program (Windows environment) to automatically allocate issues detected through GrayBox to developers through Jira.\n In addition, i developed and maintained tools for detecting memory leakage and CPU load in AVN (Linux C/C++ and Windows Eclipse Plugins RCP_Java).",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Seoul, Korea",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Seoul, Korea",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
