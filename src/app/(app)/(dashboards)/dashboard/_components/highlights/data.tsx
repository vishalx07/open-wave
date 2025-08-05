import { FacebookIcon, InstagramIcon, StoreIcon } from "lucide-react";

export const SELLS_DATA = {
  totalSells: 295700,
  sellsGrowth: 2.7,
  platformSells: [
    {
      name: "Online Store",
      icon: StoreIcon,
      sells: 172000,
      growth: 3.9,
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      sells: 85000,
      growth: 0.7,
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      sells: 36000,
      growth: 8.2,
    },
  ],
};
