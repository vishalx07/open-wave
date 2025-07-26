import { Mail, MapPin, Zap, type LucideProps } from "lucide-react";

interface Profile {
  name: string;
  verified: boolean;
  avatarUrl: string;
  details: {
    name: "company" | "location" | "email";
    value: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  }[];
}

export const PROFILE: Profile = {
  name: "Jenny Klabber",
  verified: true,
  avatarUrl: "/images/user2.png",
  details: [
    {
      name: "company",
      value: "KeenThemes",
      icon: Zap,
    },
    {
      name: "location",
      value: "SF, Bay Area",
      icon: MapPin,
    },
    {
      name: "email",
      value: "jenny@kteam.com",
      icon: Mail,
    },
  ],
};
