import { IMenuItem, ISocials } from "../types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  policies: IMenuItem[];
  socials: ISocials;
  companyName: string;
} = {
  subheading: "The modern golf champion",
  quickLinks: [
    {
      text: "Features",
      to: "#features",
    },
    {
      text: "Pricing",
      to: "#pricing",
    },
  ],
  email: "puttr.official@gmail.com",
  telephone: "+1 (123) 456-7890",
  companyName: "Yannick Alexander Lawler",
  policies: [
    {
      text: "Privacy Policy",
      to: "/privacy-policy",
    },
    {
      text: "Terms of Service",
      to: "/terms-conditions",
    },
  ],
  socials: {
    // facebook: 'https://facebook.com',
    // youtube: 'https://youtube.com',
    tiktok: "https://www.tiktok.com/@puttr.official",
    instagram: "https://www.instagram.com/puttr.golf",
  },
};
