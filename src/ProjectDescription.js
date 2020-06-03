import keyCon from "./images/gifs/key-con-portfolio.gif";
import blackjack from "./images/gifs/blackjack-portfolio.gif";
import guidr from "./images/gifs/guidr-portfolio.gif";
import forLife from "./images/gifs/forlife-portfolio.gif";

export const desc = [
  {
    title: "Key Conservation",
    role:
      "I was responsible for building out the urgency feature, debugging some back-end issues, and assisted another developer on the likes and bookmarks features.",
    difficulties:
      "Before this project I had no experience in React Native or working in a larger team of developers at a similar skillset to myself.",
    solution:
      "We put a Trello board to great use and had excellent communication. We leveraged the git flow and got to practice on an app that is actively in use.",
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
      }
    ],
    gif: keyCon
  },
  {
    title: "GUIDR",
    role:
      "I was the Front-End Developer for this project, I had the responsibility of communicating with a Back-End Developer and a UX Designer to create a product we would all be happy with.",
    difficulties:
      "At the time I was quite new to Redux and didn't have a lot of confidence in my ability to interact with a RESTful api.",
    solution:
      "I referenced a lot of docs plus dug through several previous projects. I also heavily communicated with our Back-End dev to figure out what data was being sent and recieved.",
    features: [
      {
        id: 1,
        bullet: "Able to create new users and login."
      },
      {
        id: 2,
        bullet: "Users can Create, Read, Update, and Delete trips."
      },
      {
        id: 3,
        bullet: "Ability to add photos."
      }
    ],
    gif: guidr
  },
  {
    title: "Blackjack Card Counter",
    role:
      "This was an app I worked on solo in order to practice JavaScript logic and React Hooks.",
    difficulties: "At the time I had a hard using logic in React.",
    solution:
      "I referenced a few past assignments and was able to figure out how to apply it directly to my vision of the app.",
    features: [
      {
        id: 1,
        bullet:
          "Dynamically calculates the odds of the next card to be flipped in a deck."
      },
      {
        id: 2,
        bullet:
          "Odds and cards remaining are color coded to enable user to easily read the output."
      }
    ],
    gif: blackjack
  },
  {
    title: "Bucket List Tracker",
    role:
      "This was a personal project of mine where I was able to take up all responsibilities myself, I had the opportunity to build the front and back end as well as the design for this app.",
    difficulties:
      "Before this project I had a difficult time with the React lifecycle, I had several bugs involving components rendering at the wrong time.",
    solution:
      "I read a lot of documentation and scattered logs throughout the app to better understand what would render when. After this project I feel very confident in my understanding of lifecycles.",
    features: [
      {
        id: 1,
        bullet:
          "Users can document life goals, sort them, share them, set a finish by date, and track goals that have been completed."
      },
      {
        id: 2,
        bullet:
          "A list of users that have admin access that can moderate and delete potential distasteful goals posted to community page."
      }
    ],
    gif: blackjack
  }
];
