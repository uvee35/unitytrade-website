import Technology from "../src/assets/Images/tech.jpg";
import Jewellery from "../src/assets/Images/jewellery.jpg";
import Clothing from "../src/assets/Images/clothes.jpg";
import tv from "../src/assets/Images/tv.jpg";
import {
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

export const ServiceData = [
  {
    icon: RxRocket,
    title: "Jewellery",

    backgroundImage: Jewellery,
  },
  {
    icon: RxPencil2,
    title: "Clothing",
    backgroundImage: Clothing,
  },
  {
    icon: RxDesktop,
    title: "Technology",

    backgroundImage: Technology,
  },
  {
    icon: RxReader,
    title: "Tv",
    backgroundImage: tv,
  },
  {
    icon: RxAccessibility,
    title: "Management",
  },
  {
    icon: RxRocket,
    title: "Production",
  },
];
