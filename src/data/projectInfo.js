import mirrur from "../images/mirrur.jpeg";
import animalRescue from "../images/animalRescue.jpg";
import tmk from "../images/tmk.jpg";
import wtw from "../images/wtw.jpg";

export const projectData = [
    {
        title: "HSNT Animal Rescue",
        brief: "Dynamic Data Parser for Non-Profit organization",
        description: "Developed platform with 2 team members for non-profit that dynamically parsed and categorized organization's animal shelter data sets, catering to a wide range of end-users and led development of REST API by cleaning/packaging over 14000+ rows of data with Pandas library, handling endpoints of back-end Flask server, and piping data to front-end",
        link: "https://github.com/jshom/mirrur",
        showLink: false,
        imgSrc: animalRescue
    },
    {
        title: "Mirrur // HackRPI Wolfram Award Winner 🎉",
        brief: "Natural Language Processing Chatbot",
        description: "Collaborated with 3 team members to create a natural language processing SMS chatbot with Python to identify pre-depressive and hopeless language and integrated SMS chat functionality with Twilio's REST APIs and formulated 3 sentiment analysis tests to track keywords in chat messages sent to the back-end with Google Cloud's Natural Language API",
        link: "https://github.com/jshom/mirrur",
        showLink: true,
        imgSrc: mirrur
    },
    {
        title: "What's The Wave",
        brief: "College Social-Event Finder",
        description: "Headed agile development of MERN social event creation React application in a group of 5 and managed full-stack development by defining user-data schema in MongoDB back-end and parsing data with Axios in front-end and spearheaded user interface design with fully functional Figma prototype and implementation with React components",
        link: "https://github.com/antmcgrann/whatsthewave",
        showLink: true,
        imgSrc: wtw
    },
    {
        title: "TMK Groups",
        brief: "Real-Estate Photography Portfolio",
        description: "Designed and launched photography portfolio web application with reusable and responsive user interface components built with React, Emotion, and Bootstrap",
        link: "https://github.com/pathfold/tmkgroups",
        showLink: true,
        imgSrc: tmk
    }
]