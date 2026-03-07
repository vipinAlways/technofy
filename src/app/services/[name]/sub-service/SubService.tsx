import HowItWorks from "@/components/common/HowItWorks";
import ServiceSection from "@/components/common/ServiceSection";
import WhyCard from "@/components/common/WhyCard";
import Problem from "@/components/services/subService/Problem";
import SolutionCard from "@/components/services/subService/SolutionCard";
import { Button } from "@/components/ui/button";
import { type SubService } from "@/index";
import Routes from "@/lib/route";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

const SubService = ({
  serivceName,
  data,
}: {
  serivceName: string;
  data: SubService;
}) => {
  return (
    <div className="w-full flex flex-col md:gap-24 gap-12 items-center">
      <section
        id="hero"
        className="relative w-full lg:h-[80vh] md:h-[65vh] h-[75vh] overflow-hidden flex justify-center items-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL}/${data.service_image}`}
            alt={data.heading}
            className="w-full h-full object-cover aspect-video"
            loading="eager"
          />
        </div>

        {/* Blur bottom */}
<div className="pointer-events-none absolute z-40 left-1/2 -translate-x-1/2 w-[150%] -bottom-8 h-16 bg-[#F9FAFB] blur-md" />
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 lg:px-0 text-white flex flex-col gap-8 pt-10">
          <div className="flex flex-col gap-3 md:w-[70%]
          ">
            <h1 className="md:text-5xl text-4xl md:leading-[3.25rem] font-bold">
              {data.heading}
            </h1>

            <p className="md:text-lg md:w-[90%] text-base md:leading-7 text-muted-foreground">
              {data.description}
            </p>
          </div>

          <Button
            className="px-8 py-6 font-semibold w-fit text-lg rounded-[0.5rem]"
            asChild
          >
            <Link href={Routes.contact} className="flex items-center gap-2">
              Get a Free Consultation
              <MoveRightIcon className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>
      <div className="md:max-w-7xl  lg:px-0 px-4 w-full mx-auto flex flex-col  items-stretch">
        <Problem heading={data.problem_heading} solutions={data.problem_issues} />
      </div>
      <div className="w-full bg-accent-foreground py-10">
        <div className="md:max-w-7xl  lg:px-0 px-4 mx-auto  space-y-4">
          <h3 className="text-accent font-semibold md:leading-[100%] md:text-xl  text-base md:text-center">
            Solution
          </h3>
          <ServiceSection
            id="service"
            data={{
              heading: `Our ${data.service_name} Architecture`,
              para: "Enterprise-grade technology solutions designed to empower your business at every stage.",
            }}
            className="items-start md:items-center md:text-center"
          >
            <div className="flex flex-wrap gap-8 items-stretch justify-center  max-w-full w-full  ">
              {data.solutions &&
                data.solutions.map((item: any, index: any) => {
                  return <SolutionCard key={index} solutions={item} />;
                })}
            </div>
          </ServiceSection>
        </div>
      </div>

      <div className="md:max-w-7xl  lg:px-0 px-4 md:pb-24 pb-12 w-full mx-auto flex flex-col  gap-24 items-stretch">
        <WhyCard
          whyCardData={{
            heading: "Our Core Values",
            image: data.whycard_image,
            para: "We combine technical excellence with a client-first approach to deliver solutions that truly make a difference.",
            fetures: data.advantages,
          }}
          className="flex-row-reverse"
        />
        <HowItWorks id="howItworks" />
      </div>
    </div>
  );
};

export default SubService;
