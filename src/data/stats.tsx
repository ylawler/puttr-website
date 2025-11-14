import { BsFillStarFill } from "react-icons/bs";
import { IoGolfOutline } from "react-icons/io5";

import { IStats } from "../types";

export const stats: IStats[] = [
  {
    title: "250+",
    icon: <IoGolfOutline size={34} />,
    description: "Hole-by-hole data for over 250 golf courses worldwide.",
  },
  {
    title: "5.0",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "App store rating from satisfied golfers.",
  },
];
