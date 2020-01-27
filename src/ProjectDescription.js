import keyCon from "./images/gifs/key-con-portfolio.gif";
import blackjack from "./images/gifs/blackjack-portfolio.gif";
import guidr from "./images/gifs/guidr-portfolio.gif";

export const desc = [
  {
    title: "Key Conservation",
    role:
      "I was responsible for building out the urgency feature, debugging some back-end issues, and assisted another developer on the likes and bookmarks feature.",
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
      "I was the Front-End dev for this project, I had the responsibility of communicating with a Back-End dev and a UX-Designer to create a product we would all be happy with.",
    difficulties:
      "At the time I was quite new to Redux and didn't have a lot of confidence in my ability to interact with a RESTful api.",
    solution:
      "I referenced a lot of docs plus dug through several previous projects. I also heavily communicated with our backend dev to figure out what data was being sent and recieved.",
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
      "This was an app I worked on solo in order to practice javascript logic and react hooks.",
    difficulties: "At the time I had a hard time tying logic into react.",
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
        bullet: "Odds and cards remaining are color coded to enable user to easily read the output."
      }
    ],
    gif: blackjack
  },
  {
    title: "forLife Fitness",
    role: "I was a front-end developer for this project and had the responsibility to lead two other less experienced react devs and work directly with a UX Designer.",
    difficulties: "Our back-end developer lived in Europe, which made communicating difficult given our timezones were dramatically different.",
    solution: "We organized questions about issues we were having, and what data we needed where and had dense efficient meetings during the narrow window our schedules collided.",
    features: [
      {
        id: 1,
        bullet:
          "Users are able to keep a log of weight lifting progress by date."
      },
      {
        id: 2,
        bullet:
          "Users can Create, Read, Update, and Delete exercises under a category of targeted muscles."
      },
      // {
      //   id: 3,
      //   bullet: "Able to practice interacting with a RESTful api, using formik."
      // }
    ],
    gif: blackjack
  }
];
