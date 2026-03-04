"use client";
import { ServiceHeroSection } from "@/index";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Routes from "@/lib/route";

const HeroSection = ({
  heroSectionData,
}: {
  heroSectionData: ServiceHeroSection;
}) => {
  console.log(heroSectionData);
  const { heading, image, para, button } = heroSectionData;
  return (
    <section className=" w-full flex items-center justify-center">
      <div className="flex items-center bg-accent justify-center md:p-10 p-6 rounded-2xl  h-fit gap-8 w-full">
        <div className="flex flex-col items-start gap-8 flex-1 w-full">
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-bold md:text-5xl text-2xl md:leading-[4.25rem] leading-8 text-white">
              {heading}
            </h1>
            <p className="md:text-lg font-normal text-muted-foreground md:leading-7">
              {para}
            </p>
          </div>

          <Button className="px-6 py-5 text-base leading-[100%] font-semibold w-full ">
            <Link
              href={Routes.contact}
              className="text-lg font-semibold leading-7 flex justify-center items-center gap-2"
            >
              {button} <MoveRight className="size-6" />
            </Link>{" "}
          </Button>
        </div>

        <div className="flex-1 max-md:hidden  h-full aspect-12/11 relative">
          <img
            src={image}
            alt={heading}
            className="rounded-2xl object-cover h-full w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
