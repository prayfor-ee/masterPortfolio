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
  subTitle: `Hello, I'm KiWon Leetest. 
    I'm a software developer. 
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
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

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

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
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
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
