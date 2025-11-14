import { IMenuItem, ISocials } from "../types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  policies: IMenuItem[];
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
  policies: [
    {
      text: "Privacy Policy",
      url: "https://ylawler.github.io/puttr-legal/privacy-policy.html",
    },
    {
      text: "Terms of Service",
      url: "https://ylawler.github.io/puttr-legal/terms-of-service.html",
    },
  ],
  socials: {
    // facebook: 'https://facebook.com',
    // youtube: 'https://youtube.com',
    tiktok: "https://www.tiktok.com/@puttr.official",
    instagram: "https://www.instagram.com/puttr.golf",
  },
};
