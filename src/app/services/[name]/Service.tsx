import CTA from "@/components/common/CTA";
import HowItWorks from "@/components/common/HowItWorks";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceSection from "@/components/common/ServiceSection";
import WhyCard from "@/components/common/WhyCard";
import HeroSection from "@/components/services/HeroSection";
import OverView from "@/components/common/OverView";
import { ServiceCardData, ServiceOverViewData } from "@/index";

const Service = ({ data, href }: { data: any; href: string }) => {
  return (
    <div className="w-full flex flex-col md:gap-24 gap-12 md:py-32 py-28 pb-24">
      <div className="w-full">
        <div className="md:max-w-7xl  lg:px-0 px-4 mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
          {data?.heroSection && (
            <HeroSection heroSectionData={data.heroSection} />
          )}

          {data.overView && (
            <OverView
              subTitle="Service OverView"
              overViewData={data.overView as ServiceOverViewData}
            />
          )}
        </div>
      </div>

      <div className="bg-accent-foreground py-10 px-4">
        <ServiceSection
          id="service"
          data={{
            heading: "Services Included in",
            para: "Enterprise-grade technology solutions designed to empower your business at every stage.",
            Service: "Core IT",
          }}
        >
          <div className="flex w-full flex-wrap gap-8 items-stretch justify-center">
            {data.subServices &&
              data.subServices.map((item: ServiceCardData) => {
                return (
                  <ServiceCard
                    href={`/services/${href}/sub-service/${item.heading
                      .replace(/\u00A0/g, "")
                      .replace(/\s+/g, "")
                      .trim()}`}
                    key={item.heading}
                    cardData={item}
                  />
                );
              })}
          </div>
        </ServiceSection>
      </div>

      <div className="md:max-w-7xl  lg:px-0 px-4 w-full mx-auto flex flex-col  gap-24 items-stretch">
        <WhyCard whyCardData={data.whySection} />
        <HowItWorks id="howItworks" />
      </div>
    </div>
  );
};

export default Service;
