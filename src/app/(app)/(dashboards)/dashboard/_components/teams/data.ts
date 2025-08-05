export type TeamType = {
  name: string;
  role: string;
  rating: number;
  lastModified: string;
  members: {
    name: string;
    avatar: string;
  }[];
};

export const TEAMS_DATA: TeamType[] = [
  {
    name: "Quality Assurance",
    role: "Product testing",
    rating: 4.5,
    lastModified: "25 Sep, 2024",
    members: [
      { name: "Member 1", avatar: "/images/user1.png" },
      { name: "Member 2", avatar: "/images/user2.png" },
    ],
  },
  {
    name: "Legal Team",
    role: "Legal support",
    rating: 3,
    lastModified: "25 Aug, 2024",
    members: [
      { name: "Member 1", avatar: "/images/user2.png" },
      { name: "Member 2", avatar: "/images/user3.png" },
    ],
  },
  {
    name: "Product Management",
    role: "Product development & lifecycle",
    rating: 5,
    lastModified: "21 Oct, 2024",
    members: [
      { name: "Member 1", avatar: "/images/user3.png" },
      { name: "Member 2", avatar: "/images/user2.png" },
      { name: "Member 3", avatar: "/images/user1.png" },
      { name: "Member 3", avatar: "/images/user3.png" },
    ],
  },
  {
    name: "Finance Team",
    role: "Financial planning",
    rating: 4,
    lastModified: "20 Sep, 2024",
    members: [
      { name: "Member 1", avatar: "/images/user2.png" },
      { name: "Member 2", avatar: "/images/user3.png" },
      { name: "Member 3", avatar: "/images/user1.png" },
    ],
  },
  {
    name: "Logistics Team",
    role: "Supply chain",
    rating: 2,
    lastModified: "20 Aug, 2024",
    members: [
      { name: "Member 1", avatar: "/images/user2.png" },
      { name: "Member 2", avatar: "/images/user3.png" },
    ],
  },
];
