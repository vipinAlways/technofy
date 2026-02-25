import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceHeroSection } from "@/index";

const HeroSection = ({
  className,
  data,
}: {
  className: string;
  data: ServiceHeroSection;
}) => {
  const { button, heading, image, para } = data;
  return (
    <section
      id="#hero"
      className={cn(
        className,
        `relative w-full h-screen ${image && `bg-[url(${image})]`} bg-cover bg-center flex  justify-center`,
      )}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/*  */}
      <div className="pointer-events-none absolute left-0 right-0 -bottom-4 h-16 bg-linear-to-b from-black/0 to-white blur-xl" />
      {/* Content */}
      <div
        className={cn(
          className,
          "relative z-10 text-white flex  justify-center flex-col gap-8",
        )}
      >
        <div className="text-center gap-3">
          <h1 className="text-6xl leading-17 font-bold text-white">
            {heading}
          </h1>
          <p className="text-lg  leading-7 text-muted-foreground">{para}</p>
        </div>

        <Button
          className="px-6 py-4 font-semibold text-lg leading-[100%]"
          asChild
        >
          <Link href={"/contact"} className="flex items-center gap-4">
            {button}
            <MoveRightIcon className="size-6" />{" "}
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
