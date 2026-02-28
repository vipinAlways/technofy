import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Navlinks, serviceNav } from "@/index";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Routes from "@/lib/route";

const navlinks: Navlinks[] = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "How It Works",
    href: "#",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        Services{" "}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Link href={Routes.service("it")}>it Service</Link>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>service1</DropdownMenuItem>
                <DropdownMenuItem>service1</DropdownMenuItem>
                <DropdownMenuItem>service1</DropdownMenuItem>
                <DropdownMenuItem>service1</DropdownMenuItem>
                <DropdownMenuItem>service1</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Nav = () => {
  return (
    <nav className="py-3 px-6 rounded-md bg-white w-full max-w-7xl flex justify-between items-center border border-border ">
      <div>
        <Link href={"/"}>
          <img
            src={"/images/logo.png"}
            alt="technofy.png"
            width={140}
            height={35}
            className="aspect-[4/1] "
            loading="lazy"
          />
        </Link>
      </div>
      <ul className="flex gap-6 items-center test-base leading-6 text-muted">
        <li>
          <DropdownMenuSubmenu />{" "}
        </li>

        {navlinks.map((links, index) => (
          <li key={index}>
            <Link href={links.href} className=" ">
              {links.title}
            </Link>
          </li>
        ))}
      </ul>

      <Button asChild className="py-5 text-base leading-6 font-semibold px-5 rounded-[0.5rem] ">
        <Link href={"/contact"}>Contact</Link>
      </Button>
    </nav>
  );
};

export default Nav;
