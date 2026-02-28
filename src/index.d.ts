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
  id?: string;
  icon: string;
  heading: string;
  para: string;
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
    title: string;
    para: string;
  }[];
}

export interface ServiceHeroSection {
  heading: string;
  para: string;
  button: string;
  image: string;
}
export interface ServiceOverViewData {
  heading: string;
  para1: string;
  para2: string;
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
