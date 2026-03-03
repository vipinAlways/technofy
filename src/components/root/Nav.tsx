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
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

import { data as service } from "@/services.json";
import { data as subService } from "@/servicepage.json";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "../ui/navigation-menu";
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

function ServiceSubMenu() {
  return (
    <NavigationMenu className="relative max-w-2xl">
      <NavigationMenuList>
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>

          <NavigationMenuContent className="min-w-max  bg-white text-muted  absolute  rounded-lg left-1/2 -translate-x-1/2 top-10">
            <div className="p-4 h-full w-full">
              <ul className="grid gap-4 h-full max-2xl md:grid-cols-2 ">
                {service.map((serviceData) => (
                  <li
                    key={serviceData.heading}
                    className="relative  p-2 max-w-96"
                  >
                    {/* Service Trigger */}
                    <NavigationMenu className="relative  ">
                      <NavigationMenuList>
                        <NavigationMenuItem className="relative ">
                          <NavigationMenuTrigger className="w-80 p-0   hover:bg-accent-foreground transition-all duration-100 ease-out h-fit">
                            <Link
                              href={Routes.service(serviceData.heading)}
                              className="flex items-start gap-4 p-3 rounded-lg"
                            >
                              {/* Image */}
                              <div className="relative w-24 aspect-video flex-none overflow-hidden rounded-md">
                                <img
                                  src="/images/service-hero.png"
                                  alt={serviceData.heading}
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>

                              {/* Text */}
                              <div className="flex flex-col flex-1">
                                <h3 className="text-sm font-semibold text-primary leading-none">
                                  {serviceData.heading}
                                </h3>

                                <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
                                  {serviceData.para}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuTrigger>

                          <NavigationMenuContent className="min-w-max bg-white z-40 rounded-lg -top-1/2 -left-1/2">
                            <ul className="p-3 space-y-2">
                              {subService.subServices?.map((sub) => (
                                <li key={sub.heading}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={Routes.Subservice(
                                        serviceData.heading,
                                        sub.heading,
                                      )}
                                      className="block text-sm text-muted hover:bg-accent-foreground duration-100 ease-out  hover:text-primary transition-colors"
                                    >
                                      {sub.heading}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {navlinks.map((links, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link href={links.href}>{links.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const Nav = () => {
  return (
    <nav className="py-3 px-6 ml-2 rounded-md bg-white w-full md:max-w-7xl  flex justify-between items-center border border-border relative">
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
        <ServiceSubMenu />{" "}
      </ul>

      <Button
        asChild
        className="py-5 text-base leading-6 font-semibold px-5 rounded-[0.5rem] "
      >
        <Link href={Routes.contact}>Contact</Link>
      </Button>
    </nav>
  );
};

export default Nav;
