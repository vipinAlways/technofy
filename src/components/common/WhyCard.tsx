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
    <div className="rounded-2xl bg-accent p-15 h-fit">
      <div className={cn(className, `flex items-stretch flex-1 gap-8 h-fit`)}>
        <div className="w-1/2 relative aspect-9/10">
          <img
            src={whyCardData.image}
            alt="why-us"
            className="rounded-2xl object-cover h-full w-full"
            loading="lazy"
          />
        </div>

        <div className="w-1/2 text-muted-foreground gap-8 flex flex-col items-start">
          <div>
            <h1 className="font-semibold text-4xl leading-10">
              {whyCardData.heading}
            </h1>
            <p className="text-base leading-8">{whyCardData.para}</p>
          </div>

          <div>
            <ul className="flex flex-col gap-5">
              {whyCardData.fetures.map((feature, index) => (
                <li
                  key={index}
                  className=" flex  items-start justify-start gap-4"
                >
                  <img
                    src={"/right-sign.svg"}
                    alt="right-sign.svg"
                    height={22}
                    width={22}
                    className="aspect-square"
                    loading="lazy"
                  />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.para}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full " asChild>
            <Link
              href="/contact"
              className="min-w-full px-6 py-1 text-lg leading-[100%]"
            >
              Schedule a Free Consultation <MoveRight className="size-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
