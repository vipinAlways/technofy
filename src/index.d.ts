import type { LucideIcon } from "lucide-react";

export interface Navlinks {
  title: string;
  href: string;
}

export interface StatsSection {
  icon: LucideIcon;
  title: string;
  numbers: string;
}

export interface ServiceCardData {
  slug: string;
  service_name: string;
  service_icon: string;
  short_description: string;
  image?: string;
  subServicesSlug?: {
    slug: string;
    name: string;
  }[];
}

export interface ServiceSectionData {
  heading: string;
  Service?: string;
  para: string;
}

export interface WhycardData {
  heading: string;
  image: string;
  para: string;
  fetures: {
    heading: string;
    description: string;
  }[];
}

export interface ServiceHeroSection {
  heading: string;
  para: string;
  image: string;
}
export interface ServiceOverViewData {
  heading: string;
  para: string;
}

export type Blog = {
  title: string | undefined;
  thumbnail: string | undefined;
  id: string;
  seo: {
    title: string;
    meta_description: string;
    og_image: string;
  };
  content: string;
  categories: {
    check_blogId: {
      id: number;
      name: string;
    };
  }[];
  date_created: string;
  date_updated: string;
  slug: string;
};

interface serviceNav {
  service: {
    subService: string[];
  };
}

interface SocialLink {
  href: string;
  icon: LucideIcon;
  iconClass: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
export interface Advantages {
  heading: string;
  description: string;
}
export interface Service {
  id: string;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;

  slug: string;
  service_name: string;
  heading: string;
  description: string;
  short_description: string;

  overview_heading: string;
  overview_description: string;

  service_icon: string;

  service_image: string;
  whyCard_image: string;
  sub_Services: {
    slug: string;
    service_name: string;
    service_icon: string;
    short_description: string;
  }[];
  whyCard_heading: string;
  whyCard_description: string;

  faq: FAQ[];

  advantages: Advantages[];
}

export interface Problem {
  problem: string;
  solution: string;
}

export interface Solution {
  heading: string;
  description: string;
  includes: {
    data: string[];
  };
}

export interface SubService {
  id: number;

  user_created: string;
  date_created: string;

  user_updated: string;
  date_updated: string;

  slug: string;

  service_name: string;
  service_icon: string;
  service_image: string;
  short_description: string;
  heading: string;
  description: string;
  Problem_heading: string;
  problems: Problem[];
  solutions: Solution[];
  whycard_description: string;
  whycard_image: string;
  advantages: Advantage[];
  faq: FAQ[];
}

export interface HowCardData{
  icon:string;
  heading:string;
  para:string
}
