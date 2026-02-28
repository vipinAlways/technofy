import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhycardData } from "@/index";
import Link from "next/link";

const WhyCard = ({
  className,
  whyCardData,
}: {
  className?: string;
  whyCardData: WhycardData;
}) => {
  return (
    <section id="whyUs" className="w-full flex items-center justify-center ">
      <div className="rounded-2xl  bg-accent md:p-14 p-8 h-fit">
        <div
          className={cn(`flex ${className} items-stretch flex-1 gap-8 h-fit`)}
        >
          <div className="w-1/2 relative aspect-9/10 max-md:hidden">
            <img
              src={whyCardData.image}
              alt="why-us"
              className="rounded-2xl object-cover h-full w-full"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 w-full text-muted-foreground gap-8 flex flex-col items-start">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold md:text-4xl  text-xl leading-10 text-white">
                {whyCardData.heading}
              </h1>
              <p className="md:text-base text-sm text-muted-foreground  md:leading-6 ">
                {whyCardData.para}
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-5">
                {whyCardData.fetures.map((feature, index) => (
                  <li
                    key={index}
                    className=" flex items-start justify-start gap-4"
                  >
                    <img
                      src={"/right-sign.svg"}
                      alt="right-sign.svg"
                      height={22}
                      width={22}
                      className="aspect-square size-5"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-semibold md:text-xl text-sm leading-7 text-white">
                        {feature.title}
                      </h3>
                      <p className="md:text-base text-xs font-normal text-muted-foreground md:leading-6 ">
                        {feature.para}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full  py-5 text-base leading-[100%] font-semibold px-5 rounded-[0.5rem]" asChild>
              <Link
                href="/contact"
              
              >
                Schedule a Free Consultation <MoveRight className="size-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCard;
