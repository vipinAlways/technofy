import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Navlinks } from "@/index";

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
} from "../ui/navigation-menu";
import Routes from "@/lib/route";
import { Cross, Menu, Plus } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

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
      <NavigationMenuList className="flex items-center gap-6">
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
                                  loading="lazy"
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
          <NavigationMenuItem key={index} className="flex items-center gap-6">
            <Link href={links.href}>{links.title}</Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex gap-1 items-center ">
          <h1>Menu</h1> <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="w-full max-h-[90vh] transition-all duration-0 ease-linear no-scrollbar overflow-y-auto px-6 bg-white pb-5"
      >
        {/* Logo */}
        <SheetHeader className="px-1">
          {" "}
          <SheetTitle>
            {" "}
            <Link href="/" className="block w-32">
              {" "}
              <img
                src="/images/logo.png"
                alt="Technofy logo"
                className="block w-full h-auto object-contain"
                loading="lazy"
              />{" "}
            </Link>{" "}
          </SheetTitle>{" "}
        </SheetHeader>

        {/* Navigation */}
        <div className="py-2 flex flex-col gap-3 no-scrollbar overflow-y-auto ">
          {/* Services Accordion */}
          <Accordion
            type="single"
            collapsible
            className="w-full border-b border-border "
          >
            <AccordionItem value="services" className="border-none">
              <AccordionTrigger className="text-lg font-medium text-primary">
                <h1>Services</h1>
              </AccordionTrigger>

              <AccordionContent className="pt-2 space-y-4 no-scrollbar overflow-y-auto">
                <Accordion
                  type="single"
                  className="w-full space-y-3"
                  collapsible
                >
                  {service.map((serviceData) => (
                    <AccordionItem
                      key={serviceData.heading}
                      value={serviceData.heading}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="p-0 hover:no-underline">
                        <div className="flex w-full items-center justify-between py-3">
                          <SheetClose asChild>
                            <Link
                              href={Routes.service(serviceData.heading)}
                              className="text-base font-normal"
                            >
                              <p>{serviceData.heading}</p>
                            </Link>
                          </SheetClose>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pl-4 pt-2 space-y-2">
                        {subService.subServices?.map((sub) => (
                          <SheetClose asChild key={sub.heading}>
                            <Link
                              href={Routes.Subservice(
                                serviceData.heading,
                                sub.heading,
                              )}
                              className="block text-sm text-muted hover:text-primary font-medium transition-colors"
                            >
                              <p> {sub.heading}</p>
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Other Nav Links */}
          <div className="gap-3">
            {navlinks.map((links, index) => (
              <SheetClose asChild key={index}>
                <Link
                  href={links.href}
                  className="block text-lg font-medium text-primary hover:text-accent py-4 transition-colors border-b border-border"
                >
                  {links.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>

        <SheetClose
          asChild
          className="py-3 text-xl w-full leading-6 font-semibold px-5 rounded-[0.5rem] bg-[#F79420] text-[#132039] hover:bg-[#D9730C]  "
        >
          <Link href={Routes.contact} className="text-center">
            <h1>Contact</h1>
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

const Nav = () => {
  return (
    <>
      <nav className="py-3 lg:flex hidden px-6 ml-2 rounded-md bg-white w-full md:max-w-7xl justify-between items-center border border-border relative">
        <div>
          <Link href={"/"} className="block w-36 ">
            <img
              src={"/images/logo.png"}
              alt="technofy.png"
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
      <nav className="py-3 flex lg:hidden  px-4 rounded-md bg-white w-full  justify-between items-center border border-border relative">
        <div>
          <Link href="/" className="block w-32">
            <img
              src="/images/logo.png"
              alt="Technofy logo"
              className="block w-full h-auto object-contain"
              loading="lazy"
            />
          </Link>
        </div>

        <Button
          asChild
          className="py-5 text-base leading-6 font-semibold px-5 rounded-[0.5rem] "
        >
          <NavSheet />
        </Button>
      </nav>
    </>
  );
};

export default Nav;
