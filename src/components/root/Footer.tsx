import { Navlinks, SocialLink } from "@/index";
import Routes from "@/lib/route";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export const socialLink: SocialLink[] = [
  {
    href: "#",
    icon: Linkedin,
    iconClass: "stroke-black fill-[#0E052A]  bg-white rounded-[0.1rem]  p-0.5",
  },
  {
    href: "#",
    icon: Facebook,
    iconClass: " stroke-black fill-[#0E052A]  bg-white rounded-full  p-0.5",
  },
  {
    href: "#",
    icon: Twitter,
    iconClass: "fill-white  stroke-white [-webkit-text-stroke:2px_black]",
  },
  {
    href: "#",
    icon: Instagram,
    iconClass: " stroke-white fill-transparent   stroke-[2px]",
  },
];

const footerLink: Navlinks[] = [
  {
    href: "/about",
    title: "About Us",
  },
  {
    href: Routes.contact,
    title: "Contact",
  },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
  },
];
const Footer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-0 py-6 flex flex-col gap-5">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-10 w-full">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="block w-36">
            <img
              src="/images/logo.png"
              alt="Technofy"
              className="block w-full h-auto object-contain"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-start gap-3 text-white">
          <h1 className="text-lg font-medium ">Links</h1>
          <div className="flex flex-col items-start   gap-3  text-base leading-6">
            {footerLink.map((links, index) => (
              <li key={index}>
                <Link
                  href={links.href}
                  className="text-border transition-colors text-base"
                >
                  {links.title}
                </Link>
              </li>
            ))}
          </div>
        </ul>
        {/* Navigation Links */}
        <ul className="flex flex-col items-start gap-3 text-white">
          <h1 className="text-lg font-medium ">Services</h1>
          <div className="flex flex-col items-start   gap-3  text-base leading-6">
            {footerLink.map((links, index) => (
              <li key={index}>
                <Link
                  href={links.href}
                  className="text-border transition-colors text-base"
                >
                  {links.title}
                </Link>
              </li>
            ))}
          </div>
        </ul>
        <ul className="flex flex-col items-start gap-3 text-white">
          <h1 className="text-lg font-medium ">Get In Touch</h1>
          <div className=" flex flex-col gap-3 text-border transition-colors text-base ">
            <a href="mailto:support@technofy.com">
              <p> Email: support@technofy.com</p>
            </a>
            <a href="tel:00000000">
              <p>Phone: +91 XXXXX XXXXX</p>
            </a>
          </div>
          <div className="flex justify-center md:justify-end gap-3  ">
            {socialLink.map((link, index) => {
              const Icon = link.icon;
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <Icon className={cn("size-6", link.iconClass)} />
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-muted" />

      {/* Bottom Section */}
      <div>
        <p className="text-center text-sm text-muted">
          Copyright &copy; {new Date().getFullYear()} Technofy. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
