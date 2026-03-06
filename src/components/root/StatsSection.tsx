"use client"
import { type StatsSection } from "@/index";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Award, Building2, Headset, Users } from "lucide-react";

const statsSectionData: StatsSection[] = [
  {
    icon: Award,
    numbers: "98%",
    title: "Client Satisfaction",
  },
  {
    icon: Building2,
    numbers: "100+",
    title: "Business Supported",
  },
  {
    icon: Headset,
    numbers: "24/7",
    title: "Expert Support",
  },
  {
    icon: Users,
    numbers: "10+",
    title: "Year Experience",
  },
];

const StatsSectionPage = () => {
  const chunkedStats = [];
  for (let i = 0; i < statsSectionData.length; i += 2) {
    chunkedStats.push(statsSectionData.slice(i, i + 2));
  }
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1500,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {chunkedStats.map((pair, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-2 gap-6 w-full">
              {pair.map((data, i) => {
                const Icon = data.icon;

                return (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <Icon className="w-6 h-6 text-muted stroke-[1.5px]" />

                    <div className="gap-2 flex flex-col items-center">
                      <span className="text-accent  text-2xl font-bold">
                        {data.numbers}
                      </span>

                      <span className="text-center text-muted md:text-lg text-sm md:leading-7 font-normal">
                        {data.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default StatsSectionPage;
