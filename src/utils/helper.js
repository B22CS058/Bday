import {
  // FaDiagramProject,
  // FaEnvelope,
  FaCalendar,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaEnvelope,
  FaMemory,
  FaYoutube,
  FaGamepad,
  FaComments
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uril: "",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/sakshi-g-31958a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "https://github.com/Vaibhav92735",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaYoutube,
    uril: "https://www.youtube.com/channel/UC1XK9jZbDm8AdhsRW7iFVyQ",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaCalendar,
    uri: "#dates",
    name: "Dates",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#about",
    name: "Message",
  },
  {
    id: `game-${Date.now()}`,
    Icon: FaGamepad,
    uri: "#game",
    name: "Game",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaMemory,
    uri: "#projects",
    name: "Memories",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaComments,
    uri: "#chats",
    name: "Chats",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Single Food Restaurant",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 2,
    time: "2022-23"
  },
  {
    id: `codepen-${Date.now()}`,
    name: "CodePen Clone",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 1,
    time: "2022-23"
  },
  {
    id: `openai-${Date.now()}`,
    name: "OpenAI",
    imgSrc: OpenAI,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 3,
    time: "2022-23"
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Chat App Build",
    imgSrc: ChatApp,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 4,
    time: "2022-23"
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Image Sharing App",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 5,
    time: "2022-23"
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Pixabay Clone 2.0",
    imgSrc: PixabayClone,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 6,
    time: "2022-23"
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Fresh Juice UI Build",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 7,
    time: "2022-23"
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 8,
    time: "2022-23"
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/Vetrivel-VP",
    serial: 9,
    time: "2022-23"
  },
];
