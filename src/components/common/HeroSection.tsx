import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = ({ className }: { className: string }) => {
  return (
    <section
      id="#hero"
      className={cn(
        className,
        "relative w-full h-screen bg-[url('/images/hero-background.png')] bg-cover bg-center flex  justify-center",
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
            Smart IT Solutions That Drive <br /> Business Growth
          </h1>
          <p className="text-lg  leading-7 text-muted-foreground">
            We design, secure, and manage your technology so you can focus on
            scaling your business
            <br />— without IT stress{" "}
          </p>
        </div>

        <Button
          className="px-6 py-4 font-semibold text-lg leading-[100%]"
          asChild
        >
          <Link href={"/contact"} className="flex items-center gap-4">
            Get a Free Consultation <MoveRightIcon className="size-6" />{" "}
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
