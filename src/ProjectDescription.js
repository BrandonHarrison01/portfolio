import keyCon from "./images/gifs/key-con-portfolio.gif";
import blackjack from "./images/gifs/blackjack-portfolio.gif";

export const desc = [
  {
    title: "Key Conservation",
    role: "I was responsible for building out the urgency feature, debugging some back-end issues, and assisted another developer on the likes and bookmarks feature.",
    difficulties: "Before this project I had no experience in React Native or working in a larger team of developers at a similar skillset to myself.",
    solution: "We put a Trello board to great use and had excellent communication. We leveraged the git flow and got to practice on an app that is actively in production.",
    features: [
      {
        id: 1,
        bullet:
          "Supporters are able to see a list of conservation organizations in a feed similar to Instagram."
      },
      {
        id: 2,
        bullet:
          "Conservations are able to post where help is needed, upload Photos and Video as well as updates, supporters are given a direct link to where donations can be recieved."
      },
      {
        id: 3,
        bullet:
          "All users are able to Like, Bookmark, and Comment on a Conservations Campaign."
      },
    ],
    gif: keyCon
  },
  {
    title: "GUIDR",
    role:
      "I was the Front-End dev for this project, I had the responsibility of communicating with a Back-End dev and a UX-Designer to create a product we would all be happy with.",
    difficulties:
      "At the time I was quite new to Redux and didn't have a lot of confidence in my ability to interact with a RESTful api.",
    solution: "I referenced a lot of docs plus dug through several previous projects. Also I was lucky enough to have a great back-end dev that provided me with a very well written and descriptive readme file.",
    features: [
      {
        id: 1,
        bullet: "Able to create new users and login."
      },
      {
        id: 2,
        bullet:
          "Users can Create, Read, Update, and Delete trips."
      },
      {
        id: 3,
        bullet:
          "Ability to add photos."
      },
    ],
    gif: keyCon
  },
  {
    title: "Blackjack Card Counter",
    role: "",
    difficulties: "",
    solution: "",
    features: [
      {
        id: 1,
        bullet: "This app was a side project I was really happy with"
      },
      {
        id: 2,
        bullet:
          "Gave me practice using react hooks and tying javascript logic into the app"
      }
    ],
    gif: blackjack
  },
  {
    title: "forLife Fitness",
    role: "",
    difficulties: "",
    solution: "",
    features: [
      {
        id: 1,
        bullet:
          "This app was a build week project I had the opportunity to lead other front-end devs to build"
      },
      {
        id: 2,
        bullet:
          "We worked with a back end dev based in europe and got to experience the challenges of working in different time zones. I felt this was valueable because we only had a narrow window to communicate, and were forced to ask questions, and communicate very efficiently"
      },
      {
        id: 3,
        bullet: "Able to practice interacting with a RESTful api, using formik."
      }
    ],
    gif: blackjack
  }
];
