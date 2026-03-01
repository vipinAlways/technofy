import { ServiceCardData } from "@/index";
import { IconMap } from "@/lib/Icons";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ cardData,href }: { cardData: ServiceCardData,href:string }) => {
  const Icon: LucideIcon = IconMap[cardData.icon as keyof typeof IconMap];
  return (
    <Link
      href={href}
      className="bg-white  rounded-2xl p-6 flex flex-col items-center gap-5 border border-border max-w-[25.3rem] group hover:shadow-[0_4px_8px_rgba(247,148,32,0.64)] transition-all duration-100 ease-linear shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
    >
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-accent-foreground group-hover:bg-[#3853A4] p-6 transition-all duration-200 ease-linear">
        <Icon className="w-6 h-6 text-accent group-hover:text-white" />
      </div>
      <div className="flex flex-col items-center gap-3 p-3">
        <h2 className="font-semibold text-xl leading-7 text-primary group-hover:text-accent transition-all duration-200 ease-linear">
          {cardData.heading}
        </h2>
        <p className="text-wrap text-center text-muted leading-6">
          {cardData.para}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;