import { ServiceCardData } from "@/index";
import { IconMap } from "@/lib/Icons";
import { LucideIcon } from "lucide-react";

const cardData: ServiceCardData[] = [
  {
    icon: "MessageSquare",
    heading: "Consultation",
    para: "We listen to your challenges and understand your business goals in a free discovery call.",
  },
  {
    icon: "Lightbulb",
    heading: "Strategy & Planning",
    para: "Our team designs a tailored roadmap with clear milestones and transparent timelines.",
  },
  {
    icon: "Rocket",
    heading: "Implementation & Support",
    para: "We deploy your solution and provide ongoing management, monitoring, and support.",
  },
];
const HowItWorks = ({ id }: { id: string }) => {
  return (
    <section id={id} className="space-y-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-primary text-4xl font-semibold">How It Works</h1>
        <p className="text-muted text-base leading-6 font-normal">
          Getting started is simple. Three clear steps to transforming your IT.
        </p>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between gap-6">
        {cardData.map((data, index) => {
          const Icon: LucideIcon = IconMap[data.icon as keyof typeof IconMap];

          return (
            <div
              key={index}
              className=" rounded-2xl p-6 flex flex-col items-center gap-6 relative group"
            >
             <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#3853A4]/20 group-hover:bg-[#3853A4] p-6 relative transition-all duration-200 ease-linear">
                <Icon className="size-6 text-accent group-hover:text-white transition-all duration-200 ease-linear" />
                {index !== 0 && (
                 <hr className="h-0.5 bg-gradient-to-r from-[#3853A4]/20 via-[#3853A4] to-[#3853A4]/20 absolute md:right-24 md:top-1/2 md:w-10 w-20 bottom-24 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 md:left-auto md:translate-x-0" />
                )}
              </div>
              <div className="flex flex-col items-center gap-4 p-3">
                <h2 className="text-[#F47B25] leading-6 font-bold text-xl">
                  STEP 0{index + 1}
                </h2>
                <div className="flex gap-3 flex-col items-center">
                  <h2 className="font-medium text-xl leading-7 ">
                    {data.heading}
                  </h2>
                  <p className="text-wrap text-center text-base leading-6 text-muted">
                    {data.para}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
