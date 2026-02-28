import {
  Phone,
  ExternalLink,
  Linkedin,
  Github,
  ArrowRight,
  Mail,
  Code2,
  Cpu,
  BarChart2,
  MapPin,
  Menu,
  X,
  Globe,
  Zap,
} from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "work",
    link: "/work",
  },
  {
    label: "services",
    link: "/services",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "contact",
    link: "/contact",
  },
];

export const SERVICES = [
  {
    number: "01",
    title: "Landing Pages",
    desc: "AI-assisted, bilingual-ready landing pages built fast and deployed faster. Mobile-first, conversion-focused.",
    price: "From $300",
  },
  {
    number: "02",
    title: "Full Web Apps",
    desc: "Full-stack MERN applications with auth, dashboards, APIs, and real business logic. Not templates.",
    price: "Custom",
  },
  {
    number: "03",
    title: "CRM & Automation",
    desc: "GoHighLevel pipelines, Google Apps Script workflows, and Zapier flows that eliminate manual work.",
    price: "From $500",
  },
  {
    number: "04",
    title: "Ongoing Hosting",
    desc: "Monthly hosting, uptime monitoring, and content updates. Your site stays fast, secure, and current.",
    price: "$150–200/mo",
  },
];

export const PROJECTS = [
  {
    tag: "Nonprofit · Bilingual · Full Stack",
    title: "Hemophilia Outreach of El Paso",
    subtitle: "HOEP",
    desc: "A bilingual (EN/ES) web platform for El Paso's hemophilia community. Features include diagnosis letter verification, dynamic resource directories, email notification systems, and DeepL-powered translations optimized for local SEO.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "GoHighLevel",
      "DeepL API",
      "Nodemailer",
    ],
    color: "#C8102E",
    accent: "#FFD100",
    live: "https://hemo-el-paso.org",
  },
  {
    tag: "Coming Soon",
    title: "Your Business Here",
    subtitle: "Local · El Paso",
    desc: "A fast, modern website that turns Google searchers into paying customers. Bilingual, mobile-first, and built to last.",
    stack: [],
    color: "#1a1a1a",
    accent: "#f59e0b",
    live: null,
    placeholder: true,
  },
];

export const STATS = [
  {
    value: "75",
    label: "Reduction in manual work via automation",
    suffix: " %",
  },
  { value: "80", label: "Client accounts managed concurrently", suffix: " +" },
  { value: "261", label: "Local El Paso businesses identified", suffix: null },
  { value: "5", label: "Bootcamp graduate, TripleTen Nov 2024", suffix: " ★" },
];

export const BUTTON_STYLES = {
  primary: "bg-[#f59e0b] text-black hover:bg-white",
  secondary:
    "border border-[#f59e0b]/40 text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black",
  ghost:
    "border border-white/20 text-white/60 hover:border-white/50 hover:text-white",
};

export const BUTTON_SIZES = {
  large: "text-xs md:text-sm px-5 md:px-8 py-3 md:py-4",
  medium: "font-bold text-sm px-10 py-4",
  small: "text-sm px-8 py-3",
};

export const ICON_STYLES = {
  primary: "text-black group-hover:text-[#f59e0b]",
  secondary: "text-[#f59e0b] group-hover:text-black",
  ghost: "text-white/60 group-hover:text-white",
};

export const ICON_CONFIG = {
  phone: Phone,
  externalLink: ExternalLink,
  linkedin: Linkedin,
  github: Github,
  arrow: ArrowRight,
  mail: Mail,
  code: Code2,
  cpu: Cpu,
  chart: BarChart2,
  map: MapPin,
  menu: Menu,
  xIcon: X,
  globe: Globe,
  zap: Zap,
};

export const ABOUT_CONFIG = [
  {
    label: "Stack",
    values: ["React, Node.js, Express, MongoDB, Tailwind"],
    icon: "code",
  },
  {
    label: "Automation",
    values: ["GoHighLevel, Google Apps Script, Zapier, Make"],
    icon: "cpu",
  },
  {
    label: "APIs",
    values: ["Stripe, DeepL, Twilio, Nodemailer, Google Places"],
    icon: "zap",
  },
  {
    label: "Currently",
    values: ["Building local web presence for El Paso businesses"],
    icon: "map",
  },
  {
    label: "Languages",
    values: ["English", "Spanish"],
    icon: "globe",
  },
];
