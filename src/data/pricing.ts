import { IPricing } from "../types";

export const tiers: IPricing[] = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Unlimited tracking of golf rounds on score cards",
      "High-level statistics on performance",
      "Ability to connect with friends",
    ],
  },
  {
    name: "Pro",
    price: 10,
    features: [
      "All features from the Starter package",
      "Advanced statistics on shot accuracy",
      "GPS golf course analysis to refine and improve your shots",
    ],
  },
];
