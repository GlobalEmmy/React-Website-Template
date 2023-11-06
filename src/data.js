import { SiOpenaigym } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },

  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
export default links;

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Program One",
    info: "This is the day that the Lord has made. We will rejoice!",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Program Two",
    info: "This is the day that the Lord has made. We will rejoice!",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Program Three",
    info: "This is the day that the Lord has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Program Four",
    info: "This is the day that the Lord has made. We will rejoice!",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Having good values is important in life",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "Having good values is important in life",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "Having good values is important in life",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Having good values is important in life",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer: "Exercise should be as regular as possible",
  },
  {
    id: 2,
    question: "What time in the day is good to work out?",
    answer: "Exercise should be as regular as possible",
  },
  {
    id: 3,
    question: "How long should my work out be?",
    answer: "Exercise should be as regular as possible",
  },
  {
    id: 4,
    question: "Do I need to warm up before I work out?",
    answer: "Exercise should be as regular as possible",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer: "Exercise should be as regular as possible",
  },
  {
    id: 6,
    question: "Should I lift weight for strength training?",
    answer: "Exercise should be as regular as possible",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jack Hor",
    quote: "Health is everything. Do everything to be healthy 1",
    job: "Students",
    avatar: require("./images/Image4.jpg"),
  },
  {
    id: 2,
    name: "Jack Hor",
    quote: "Health is everything. Do everything to be healthy 2",
    job: "Students",
    avatar: require("./images/Image4.jpg"),
  },
  {
    id: 3,
    name: "Jack Hor",
    quote: "Health is everything. Do everything to be healthy 3",
    job: "Students",
    avatar: require("./images/Image4.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: false },
      { feature: "Six Feature", available: false },
      { feature: "Seven Feature", available: false },
      { feature: "Eight Feature", available: false },
      { feature: "Nine Feature", available: false },
      { feature: "Ten Feature", available: false },
      { feature: "Eleven Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold package",
    desc: "This package is perfect for beginners who know what they doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Six Feature", available: true },
      { feature: "Seven Feature", available: true },
      { feature: "Eight Feature", available: false },
      { feature: "Nine Feature", available: false },
      { feature: "Ten Feature", available: false },
      { feature: "Eleven Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Six Feature", available: true },
      { feature: "Seven Feature", available: true },
      { feature: "Eight Feature", available: true },
      { feature: "Nine Feature", available: true },
      { feature: "Ten Feature", available: true },
      { feature: "Eleven Feature", available: true },
    ],
  },
];

const Trainer1 = require("./images/Image1.jpg");
const Trainer2 = require("./images/Image2.jpg");
const Trainer3 = require("./images/Image3.jpg");
const Trainer4 = require("./images/Image4.jpg");
const Trainer5 = require("./images/Image4.jpg");
const Trainer6 = require("./images/Image4.jpg");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Max",
    job: "Aerobic Trainer",
    socials: [
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Eric Cho",
    job: "Speed Trainer",
    socials: [
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Grace Hamm",
    job: "Flexibility Trainer",
    socials: [
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Felix Ger",
    job: "Body Composition Trainer",
    socials: [
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Paul Mea",
    job: "Circuit Trainer",
    socials: [
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Leo Nuh",
    job: "Physical Intelligence Trainer",
    socials: [
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
      "http: //instagram.com/",
    ],
  },
];