import HowItWorks from "@/components/common/HowItWorks";
import ServiceSection from "@/components/common/ServiceSection";
import WhyCard from "@/components/common/WhyCard";
import Problem from "@/components/services/subService/Problem";
import SolutionCard from "@/components/services/subService/SolutionCard";
import { Button } from "@/components/ui/button";
import {  type SubService } from "@/index";
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
        className={
          "relative w-full lg:h-[90vh]  md:h-[60vh] h-[75vh]  flex  justify-center  items-center"
        }
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="w-full h-full absolute top-0 left-0">
          <img
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL}/${data.service_image}`}
            alt={data.heading}
            className="
          w-full h-full object-cover object-center -z-20"
            loading="eager"
          />
        </div>
        {/*  */}
        <div className=" absolute left-0 right-0 -bottom-4 h-16 bg-gradient-to-b from-black/0 to-white blur-xl" />
        {/* Content */}
        <div className="flex items-start md:max-w-7xl  lg:px-0  w-full  ">
          <div
            className={
              "relative z-10 text-white flex  justify-center items-start  md:w-3/5 px-4 lg:px-0 w-full flex-col gap-8"
            }
          >
            <div className="text-start gap-3">
              <h1 className="md:text-6xl text-2xl md:leading-[4.25rem] font-bold text-white">
                {data.heading}
              </h1>
              <p className="md:text-lg text-sm md:leading-7  text-muted-foreground">
                {data.description}
              </p>
            </div>

            <Button
              className="py-5 text-base leading-[100%] font-semibold px-5 max-w-full"
              asChild
            >
              <Link href={Routes.contact} className="flex items-center gap-4">
                Schedule a Free Security Assessment
                <MoveRightIcon className="size-6" />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="md:max-w-7xl  lg:px-0 px-4 w-full mx-auto flex flex-col  items-stretch">
        <Problem heading={data.Problem_heading} solutions={data.problems} />
      </div>
      <div className="w-full bg-accent-foreground py-10">
        <div className="md:max-w-7xl  lg:px-0 px-4 mx-auto  space-y-4">
          <h3 className="text-accent font-bold text-xl leading-7 text-center">
            Solution
          </h3>
          <ServiceSection
            id="service"
            data={{
              heading: `Our ${serivceName.replaceAll("%20", " ")} Architecture`,
              para: "Enterprise-grade technology solutions designed to empower your business at every stage.",
            }}
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
