import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, text: "home", href: "#home" },
  { id: 2, text: "about", href: "#about" },
  { id: 3, text: "services", href: "#services" },
  { id: 4, text: "tours", href: "#tours" },
];

export const socialIcons = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    tourDate: "august 26th, 2020",
    tourTitle: "Tibet Adventure",
    location: "china",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    tourDate: "october 1th, 2020",
    tourTitle: "best of java",
    location: "indonesia",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    img: tour3,
    tourDate: "september 15th, 2020",
    tourTitle: "explore hong kong",
    location: "hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    tourDate: "december 5th, 2019",
    tourTitle: "kenya highlights",
    location: "kenya",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration: "20 days",
    cost: "from $3300",
  },
];
