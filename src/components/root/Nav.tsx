import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Navlinks } from "@/index";

const navlinks: Navlinks[] = [
  {
    title: "Why us",
    href: "#whyUs",
  },
  {
    title: "How It Works",
    href: "#",
  },
  {
    title: "Cotact",
    href: "/contact",
  },
];

const Nav = () => {
  return (
    <nav className="py-3 px-1.5 rounded-md bg-white w-full flex justify-between items-center border border-border">
      <div>
     <Link href={"/"}>
        <img
          src={"/images/logo.png"}
          alt="technofy.png"
          width={140}
          height={35}
          className="aspect-[4:1] "
          loading="lazy"
        /></Link>
      </div>
      <ul className="flex gap-6 items-center test-base leading-6 text-muted">
        <li>Services</li>

        {navlinks.map((links, index) => (
          <li key={index}>
            <Link href={links.href} className=" ">{links.title}</Link>
          </li>
        ))}
      </ul>

      <Button asChild className="py-4 text-base leading-6 font-semibold px-5">
        <Link href={"#"} >
        Free Counsulation</Link>
      </Button>
    </nav>
  );
};

export default Nav;
