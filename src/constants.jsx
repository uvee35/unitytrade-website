import Technology from "../src/assets/Images/tech.jpg";
import Jewellery from "../src/assets/Images/jewellery.jpg";
import Clothing from "../src/assets/Images/clothes.jpg";
import tv from "../src/assets/Images/tv.jpg";
import {
  faGem,
  faTshirt,
  faLaptopCode,
  faTv,
  faUserTie,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

export const ServiceData = [
  {
    icon: faGem,
    title: "Jewellery",
    backgroundImage: Jewellery,
  },
  {
    icon: faTshirt,
    title: "Clothing",
    backgroundImage: Clothing,
  },
  {
    icon: faLaptopCode,
    title: "Technology",
    backgroundImage: Technology,
  },
  {
    icon: faTv,
    title: "Tv",
    backgroundImage: tv,
  },
];
