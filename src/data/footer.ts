import { IMenuItem, ISocials } from "../types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "The modern golf champion",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
  ],
  email: "puttr.official@gmail.com",
  telephone: "+1 (123) 456-7890",
  socials: {
    // facebook: 'https://facebook.com',
    // youtube: 'https://youtube.com',
    tiktok: "https://www.tiktok.com/@puttr.official",
    instagram: "https://www.instagram.com/puttr.golf",
  },
};
