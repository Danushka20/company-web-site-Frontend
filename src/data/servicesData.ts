import {
  BriefcaseBusiness,
  Clock3,
  Code2,
  Cpu,
  Headset,
  Heart,
  Radio,
  Settings,
  Smartphone,
  Users,
  Wrench,
} from "lucide-react";

/* ─── Service Dropdown Items ─── */
export const serviceItems = [
  { label: "All Services", icon: BriefcaseBusiness, slug: "", path: "/services" },
  {
    label: "Software Development",
    icon: Code2,
    slug: "softwareDevelopment",
    path: "/services/softwareDevelopment",
  },
  {
    label: "IoT Solutions",
    icon: Radio,
    slug: "iotSolutions",
    path: "/services/iotSolutions",
  },
  { label: "Andon System", icon: Settings, slug: "andonSystem", path: "/services/andonSystem" },
  {
    label: "Andon System - Software",
    icon: Cpu,
    slug: "andonSoftware",
    path: "/services/andonSoftware",
  },
  {
    label: "Andon System - Hardware",
    icon: Wrench,
    slug: "andonHardware",
    path: "/services/andonHardware",
  },
];

export const getServiceItemFromPath = (pathname: string) =>
  serviceItems.find((item) => item.path === pathname) ?? serviceItems[0];

export const getServiceItemFromSlug = (slug?: string) => {
  if (!slug) {
    return serviceItems[0];
  }

  return serviceItems.find((item) => item.slug === slug) ?? serviceItems[0];
};

/* ─── Service Stats ─── */
export const serviceStats = [
  {
    icon: Users,
    value: "50+",
    title: "MEMBERS OF STAFF",
    description:
      "Expert professionals dedicated to delivering innovative IoT and automation solutions.",
  },
  {
    icon: BriefcaseBusiness,
    value: "600+",
    title: "COMPLETED PROJECTS",
    description:
      "Diverse projects across various industries showcasing our expertise and commitment.",
  },
  {
    icon: Heart,
    value: "506+",
    title: "HAPPY CUSTOMERS",
    description:
      "Building lasting relationships through exceptional service and support.",
  },
  {
    icon: Clock3,
    value: "20+",
    title: "YEARS EXPERIENCE",
    description:
      "Two decades of industry experience driving innovation and excellence.",
  },
];

/* ─── What We Do Items ─── */
export const whatWeDoItems = [
  {
    icon: Radio,
    title: "IoT Development",
    description:
      "End-to-end IoT ecosystems connecting physical assets to the digital cloud for real-time monitoring and automation.",
  },
  {
    icon: Cpu,
    title: "Software Development",
    description:
      "Custom software architectures designed for scalability, security, and seamless integration with existing workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Intuitive, high-performance mobile applications that extend your business reach to every user's fingertips.",
  },
  {
    icon: Headset,
    title: "Support & Maintenance",
    description:
      "Provide 24/7 global support and technical maintenance services to ensure your systems run smoothly and efficiently.",
  },
];
