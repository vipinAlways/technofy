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


