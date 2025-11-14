import {
  IoGolfOutline,
  IoTrophyOutline,
  IoHomeOutline,
  IoBarChartOutline,
  IoFlagOutline,
} from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import {
  PiArrowsCounterClockwiseBold,
  PiHandTapBold,
  PiGolfBold,
} from "react-icons/pi";

import { IBenefit } from "../types";

export const benefits: IBenefit[] = [
  {
    title: "Your home in puttr.",
    description:
      "A calm little hub for your golf stats — because your brain has better things to do.",
    bullets: [
      {
        title: "Quick glance at your handicap and personal bests",
        description: "",
        icon: <IoGolfOutline size={26} />,
      },
      {
        title: "Jump back into your active round anytime",
        description: "",
        icon: <IoTrophyOutline size={26} />,
      },
      {
        title: "A dedicated space for your home club",
        description: "",
        icon: <IoHomeOutline size={26} />,
      },
    ],
    imageSrc: "/images/feature-1.webp",
  },
  {
    title: "Your Round, Deconstructed",
    description:
      "All the stats you pretend you don’t obsess over — beautifully laid out and only slightly judgmental.",
    bullets: [
      {
        title:
          "Net performance chart that cheers you on (or calls you out gently)",
        description: "",
        icon: <IoBarChartOutline size={26} />,
      },
      {
        title: `See how each hole stacked up against par — the good, the bad, and the “let's not talk about that one`,
        description: "",
        icon: <IoFlagOutline size={26} />,
      },
      {
        title:
          "Clear breakdowns that make you look way more analytical than you actually are",
        description: "",
        icon: <HiOutlineLightBulb size={26} />,
      },
    ],
    imageSrc: "/images/feature-2.webp",
  },
  {
    title: "Digital Scorecard",
    description: "No more fumbling with paper scorecards and stubby pencils.",
    bullets: [
      {
        title: "Just tap to record your scores",
        description: "",
        icon: <PiHandTapBold size={26} />,
      },
      {
        title:
          "Switch between Front 9 and Back 9 faster than you can say “triple bogey”",
        description: "",
        icon: <PiArrowsCounterClockwiseBold size={26} />,
      },
      {
        title:
          "Quick buttons for Birdie, Par, Bogey & more — your thumbs are gonna love this",
        description: "",
        icon: <PiGolfBold size={26} />,
      },
    ],
    imageSrc: "/images/feature-3.webp",
  },
];
