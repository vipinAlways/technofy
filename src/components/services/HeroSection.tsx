"use client";
import { ServiceHeroSection } from "@/index";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRight, MoveRightIcon } from "lucide-react";
import Routes from "@/lib/route";

const HeroSection = ({
  heroSectionData,
}: {
  heroSectionData: ServiceHeroSection;
}) => {
  const { heading, image, para } = heroSectionData;
  return (
    <section className="max-w-full flex items-center justify-center">
      <div className="flex items-center bg-accent justify-center md:p-10 p-6 rounded-2xl h-fit gap-8 max-w-full">
        {/* Text */}
        <div className="flex flex-col items-start gap-8 md:flex-[3] w-full">
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-bold md:text-5xl text-3xl  md:leading-[4.25rem] text-white">
              {heading}
            </h1>

            <p className="md:text-lg font-normal text-muted-foreground md:leading-7 text-base">
              {para}
            </p>
          </div>

          <Button className="px-8 py-6 font-semibold text-lg leading-[100%] rounded-[0.5rem] max-md:w-full">
            <Link href={Routes.contact} className="flex items-center gap-2">
              Get a Free Consultation <MoveRightIcon className="w-6 h-6" />{" "}
            </Link>
          </Button>
        </div>

        {/* Image */}
        <div className="md:flex-[2] max-md:hidden h-full relative">
          <img
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL}/${image}`}
            alt={heading}
            className="rounded-xl object-cover h-full w-full aspect-square"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
