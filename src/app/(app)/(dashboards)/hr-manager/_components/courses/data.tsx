export type CourseStatus = "In Progress" | "Completed";

export interface Course {
  instructor: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  courseName: string;
  dateRange: string;
  progress: number;
  status: CourseStatus;
}

export const COURSES: Course[] = [
  {
    instructor: {
      name: "Nuray Aksoy",
      role: "Product Manager",
      avatarUrl: "/images/avatars/nuray.png",
    },
    courseName: "Time Management",
    dateRange: "Aug 21 – Sep 04",
    progress: 30,
    status: "In Progress",
  },
  {
    instructor: {
      name: "Arthur Taylor",
      role: "Entrepreneur / CEO",
      avatarUrl: "/images/avatars/arthur.png",
    },
    courseName: "Leadership Skills",
    dateRange: "Aug 02 – Aug 18",
    progress: 70,
    status: "In Progress",
  },
  {
    instructor: {
      name: "Wei Chen",
      role: "Operations Manager",
      avatarUrl: "/images/avatars/wei.png",
    },
    courseName: "Diversity Training",
    dateRange: "June 24 – July 03",
    progress: 100,
    status: "Completed",
  },
  {
    instructor: {
      name: "Lena Müller",
      role: "Marketing Manager",
      avatarUrl: "/images/avatars/lena.png",
    },
    courseName: "Efficiency at Work",
    dateRange: "June 04 – June 28",
    progress: 100,
    status: "Completed",
  },
];
