/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Aadesh",
  logo_name: "m.Aadesh()",
  nickname: "Aadesh / Teddy",
  full_name: "Aadesh Malviya",
  subTitle:
    "Full Stack Developer, Imaginative, Innovative and Organised Techie🔥",
  resumeLink:
    "https://drive.google.com/file/d/1hRTM9kqkMt6QqE_Xdoks_6OYIcGc5SL6/view?usp=sharing",
  mail: "aadeshm3@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ImHacked",
  linkedin: "https://www.linkedin.com/in/aadesh-malviya-b361b71b3/",
  gmail: "aadeshm3@gmail.com",
  gitlab: "https://gitlab.com/ImHacked",
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/aadeshmalviyaofficial/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node & Express",
        "⚡ Integration of third party services such as Firebase"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
       
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
       
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
       
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
       
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
    
      ],
    },
  ],
};

const degrees = {
  degrees: [
    
    {
      title: "Saraswati Senior Seconday Vidya Mandir",
      subtitle: "High School (Class 10th)",
      logo_path: "school.png",
      alt_name: "SSVM",
      duration: "2013 - 2014",
      descriptions: [
        "⚡ GOT 10 CGPA in Mathematics, Science, Hindi, English, Computer Science and Social Science "

        
      ],
      website_link: "#",
    },
    {
      title: "Saraswati Senior Seconday Vidya Mandir",
      subtitle: "Senior Secondary (Class 11th-12th)",
      logo_path: "school.png",
      alt_name: "SSVM",
      duration: "2014 - 2016",
      descriptions: [
        "⚡ Studied Mathematics, Physics, Chemistry, Computer Science and English and got 80.4% aggregate  "

        
      ],
      website_link: "#",
    },
    {
      title: "National Institute of Technology, Agartala",
      subtitle: "B.Tech in Chemical Engineering ",
      logo_path: "nit.png",
      alt_name: "NITA",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Mass trasfer, Heat Transfer, CRE, Thermodynamics, etc.",
        "⚡ I have also studied Mathematics and basic C coding in Course",

        
      ],
      website_link: "http://www.nita.ac.in/",
    },
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "Stanford University (Coursera)",
      logo_path: "ML.png",
      certificate_link:
        "http://coursera.org/share/a9ff682d2237f6c60e8a8d7082a48f3e",
      alt_name: "Staford University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Python Specialization",
      subtitle: "University of Michigan",
      logo_path: "umich.jpg",
      certificate_link:
        "https://coursera.org/share/3041b3f0d3f1f2301412bc5fe7367890",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#191970",
    },
    
    {
      title: "Software Engineering Virtual Experience",
      subtitle: "JPMorgan Chase",
      logo_path: "JP.png",
      certificate_link:
        "#",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "gold",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Front-end Developer (Intern)",
          company: "Widhya",
          company_url: "https://widhya.org/",
          logo_path: "widhya.png",
          duration: "Jan 2021 - Feb 2021",
          location: "Online(Remote)",
          description:
          "⚡ Created a static website and deployed on github. ⚡ Created a customer review webapp",
          color: "#0071C5",
        },
        {
          title: "Content Creator and Admin",
          company: "The Frustrated Engineer",
          company_url: "https://www.facebook.com/er.fosla/",
          logo_path: "tfe.png",
          duration: "July 2018 - Present",
          //location: "Online(Remote)",
          description:
          "Managing and Creating Content for the Page worth of 2.2 Million audience",
          color: "#0071C5",
        },
        {
          title: "Founder",
          company: "Devnagri Memeshala",
          company_url: "https://www.instagram.com/devnagri_memeshala",
          logo_path: "devnagri.jpg",
          duration: "May 2019 - Present",
          //location: "Online(Remote)",
          description:
          "An Initiative to promote Hindi Language and Humor through Memes",
          color: "#0071C5",
        },
        {
          title: "Co-Founder",
          company: "sudoWEB",
          company_url: "https://sudoweb.studio/",
          logo_path: "sudoweb.jpg",
          duration: "Jan 2021 - Present",
          //location: "Online(Remote)",
          description:
          "A tech firm that specializes in providing web services to small businesses. Develops MERN web apps, UI/UX and mobile apps",
          color: "#0071C5",
        },
       
      ],
    },
    {
      title: "Position of Responsibility",
      experiences: [
       
        {
          title: "Vice President",
          company: "Litraray Club of Our College",
          company_url: "https://www.instagram.com/nita_lit_club/?hl=en",
          logo_path: "lit.jpg",
          duration: "Dec 2019 - Dec 2020",
          location: "College",
          description:
            "A college Club for promoting Literature in Our College and Beyond",
          color: "#4285F4",
        },
        {
          title: "Public Relation Head",
          company: "Dramatics Club of Our College",
          //company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "aaveg.jpg",
          duration: "Feb 2021 - Present",
          location: "College",
          description:
            "Managing Public Relations from different colleges and Brands for our Club",
          color: "#4285F4",
        },
        {
          title: "Volunteer at WeCan",
          company: "We Can",
          company_url: "https://www.nita.ac.in/NITAmain/students/currentStudents/WeCan/wecan.html#:~:text=%22WE%20CAN%22%20is%20a%20student,lead%20their%20life%20with%20pride.",
          logo_path: "wecan.png",
          //duration: "Feb 2021 - Present",
          location: "College",
          description:
            "An NIT Agartala student initiative to teach and help underprivileged students",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I beleive in learning by doing. All of my projects are made during learning particular technology or for practicing it.Some Projects are for personal purpose",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "aadesh.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
 
};

const projects = {
  data: [
    
    
    {
      id: "0",
      name: "To-do List",
      url: "https://github.com/ImHacked/ReactTodoList",
      description:
        "A simple To-do list Webapp made with React.js",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
  
      ],
    },
    {
      id: "1",
      name: "Our Firm Website",
      url: "https://github.com/ImHacked/Firm",
      description:
        "A frontend Static Website made for our firm",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "A Blog Website",
      url: "https://github.com/ImHacked/blog-website",
      description:
        "A PErsonal Blog Website made with react in frontend and Node in Backend",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "Weather Webapp",
      url: "https://github.com/ImHacked/WeatherWebapp",
      description:
        "A webApp to find Weather Condition.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "Keeper App",
      url: "https://github.com/ImHacked/KeeperApp",
      description:
        "A google Keep clone made with React.js",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "Personal Portfolio",
      url: "https://github.com/ImHacked/ImHacked.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "6",
      name: "To Do List",
      url: "https://github.com/ImHacked/todo-list",
      description:
        "A basic todo list webapp",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "7",
      name: "A Meme Dating Webapp",
      url: "https://github.com/ImHacked/mirgi",
      description:
        "A webapp for fun Using famous meme characters",
      languages: [
          
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "8",
      name: "Drum",
      url: "https://github.com/ImHacked/drum",
      description:
        "A webapp for playing Drum with basic sounds",
      languages: [
       
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "9",
      name: "Dice Game",
      url: "https://github.com/ImHacked/dicegame",
      description:
        "A dice webapp to try your luck or to bet with a friend.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "10",
      name: "Bank Search Webapp",
      url: "https://github.com/ImHacked/Bank/tree/master",
      description: "Simple WebApp for searching banks in few cities with full detail ",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "11",
      name: "Simon Game",
      url: "https://github.com/ImHacked/simongame",
      description: "A simple web Game for fun.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
