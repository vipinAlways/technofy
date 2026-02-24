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
  id:string
  icon: LucideIcon;
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
  para:string
  fetures: {
    title: string;
    para: string;
  }[];
}
