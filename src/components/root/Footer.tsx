import { Navlinks } from "@/index";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const socialLink: {
  href: string;
  icon: LucideIcon;
}[] = [
  {
    href: "#",
    icon: Linkedin,
  },
  {
    href: "#",
    icon: Facebook,
  },
  {
    href: "#",
    icon: Twitter,
  },
  {
    href: "#",
    icon: Instagram,
  },
];

const footerLink: Navlinks[] = [
  {
    href: "#",
    title: "Serices",
  },
  {
    href: "/about",
    title: "About Us",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
  },
];
const Footer = () => {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center gap-5 py-6  px-1.5 ">
      <div className="py-3 px-1.5 flex justify-between text-border w-full">
        <Link href={"/"}>
          <img
            src={"/images/logo.png"}
            alt="technofy"
            width={140}
            height={35}
            className="aspect-[4:1] "
            loading="lazy"
          />
        </Link>
        <ul className="flex gap-12 items-center test-base leading-6 text-muted">
          {footerLink.map((links, index) => (
            <li key={index}>
              <Link href={links.href} className=" ">
                {links.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3 items-center test-base leading-6 text-muted">
          {socialLink.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className=" ">
                <link.icon className="size-6" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-px w-4/5 bg-muted text-muted" />
      <div className="">
        <p className="text-center text-muted">
          Copyright &copy;{new Date().getFullYear()} Technofy. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
