import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhycardData } from "@/index";
import Link from "next/link";
import Routes from "@/lib/route";

const WhyCard = ({
  className,
  whyCardData,
}: {
  className?: string;
  whyCardData: WhycardData;
}) => {
  const image = `${process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL}/${whyCardData.image}`;
  return (
    <section id="whyUs" className="w-full flex items-center justify-center">
      <div className="rounded-2xl w-full  bg-accent md:p-14 p-6 h-fit">
        <div
          className={cn(`flex ${className} items-stretch flex-1 gap-8 h-fit`)}
        >
          <div className="w-1/2 relative max-lg:hidden">
            <img
              src={whyCardData.image ? image : "/images/root-why.png"}
              alt={whyCardData.heading}
              className="rounded-2xl object-cover aspect-square h-full w-full"
              loading="lazy"
            />
          </div>

          <div className="lg:w-1/2 w-full text-muted-foreground gap-8 flex flex-col items-start ">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold md:text-4xl  text-2xl md:leading-10 text-white">
                {whyCardData.heading}
              </h1>
              <p className="text-base  text-muted-foreground  md:leading-6 ">
                {whyCardData.para}
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-5 text-start">
                {whyCardData.fetures.map((feture, index) => {
                  return (
                    <li
                      key={index}
                      className=" flex items-start justify-start gap-4"
                    >
                      <img
                        src={"/right-sign.svg"}
                        alt={feture.heading}
                        className="aspect-square size-5"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="font-semibold md:text-xl text-lg leading-7 text-white">
                          {feture.heading}
                        </h3>
                        <p className="text-base  font-normal text-muted-foreground md:leading-6 ">
                          {feture.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Button
              className="w-full  py-6 text-lg leading-[100%] font-semibold px-8 rounded-[0.5rem]"
              asChild
            >
              <Link href={Routes.contact}>
                Schedule a Free Consultation <MoveRight className="size-6 max-md:hidden" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCard;
