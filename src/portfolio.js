﻿import emoji from "react-easy-emoji";

const greeting = {
  /* Summary And Greeting Section */
  username: "Brian Abedi",
  title: "Hi, I'm Brian",
  subTitle: emoji(" A full stack developer having experience building web and mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:ff272a4c-4225-4fa3-a96c-23bbcc290f58"
};

// Links

const socialMediaLinks = {

  github: "https://github.com/babedi3",
  linkedin: "https://www.linkedin.com/brianabedi/",
  gmail: "babedi3@gatech.edu",
  /* gitlab: "https://gitlab.com/",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com/" */
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WELL VERSED IN THE FOLLOWING",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  /*   {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }, */
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    /* {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }, */
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Georgia Institute of Technology ",
      logo: require("./assets/images/gtlogo.png"),
      subHeader: "B.S.B.A. IT Management",
      duration: "Certificate: Full Stack Development",
      desc: "2015-2020",
      descBullets: [
       
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
   /*  {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "94%"
    } */
  ]
};



/* 
const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "",
      company: "",
      companylogo: require("./assets/.png"),
      date: "",
      desc: "",
      descBullets: [
        "",
        ""
      ]
    },
  ]
};
 */


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "babedi3", 
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};



const bigProjects = {
  title: "Portfolio",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/weatherapp.png"),
      link: "https://babedi3.github.io/WeatherApp/",
      text: "Weather App"
    },
    {
      image: require("./assets/images/sociopod.png"),
      link: "https://vast-scrubland-76826.herokuapp.com/",
      text: "Podcast App"
    },
    {
      image: require("./assets/images/voteright.png"),
      link: "https://github.com/babedi3/VoteRight",
      text: "VoteRight"
    },
    {
      image: require("./assets/images/booksearch.png"),
      link: "https://googleapibooksearchapp.herokuapp.com/",
      text: "Google Books Search"
    },
   /*  {
      image: require("./assets/images/budgetapp.png"),
      link: "https://budgetgraphapp.herokuapp.com/",
      text: "Budget App"
    }, */
    {
      image: require("./assets/images/employeetracker.png"),
      link: "https://github.com/babedi3/EmployeeTracker",
      text: "Employee Managment App"
    }
    
  ]
};

/* const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};
 */
// Blogs Section

/* const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};
 */
// Talks Sections
/* 
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};
 */
const contactInfo = {
  title: emoji("Contact"),
  number: "770.656.9766",
  email_address: "BABEDI3@GATECH.EDU",
  taddress: "800 Peachtree St Ne, Atlanta GA"
};

//Twitter Section

/* const twitterDetails = {

  userName : "twitter"

}; */

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack,/*  workExperiences,*/ openSource,   bigProjects, /* achievementSection,  *//* blogSection, talkSection, podcastSection, */ contactInfo /* , twitterDetails */};
