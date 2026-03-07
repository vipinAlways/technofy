import CTA from "@/components/common/CTA";
import HowItWorks from "@/components/common/HowItWorks";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceSection from "@/components/common/ServiceSection";
import WhyCard from "@/components/common/WhyCard";
import HeroSection from "@/components/services/HeroSection";
import OverView from "@/components/common/OverView";
import { ServiceCardData, type Service } from "@/index";
import Routes from "@/lib/route";


const Service = ({ data, href }: { data: Service; href: string }) => {

  // console.log(data.advantages);
  return (
    <div className="w-full flex flex-col md:gap-24 gap-12 md:py-32 py-28 pb-24">
      <div className="w-full">
        <div className="md:max-w-7xl lg:px-0 px-4 mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
          {data?.heading && (
            <HeroSection heroSectionData={{
              heading:data.heading,
              image:data.service_image,
              para:data.description
            }} />
          )}

          {data.overview_heading && (
            <OverView
              subTitle="Service Overview"
              overViewData={{
                heading:data.overview_heading,
                para:data.overview_description
              }}
            />
          )}
        </div>
      </div>

      <div className="bg-accent-foreground py-10 px-4 w-full">
        <ServiceSection
          id="service"
          data={{
            heading: "Services Included in",
            para: "Enterprise-grade technology solutions designed to empower your business at every stage.",
            Service: "Core IT",
          }}
          className="items-center text-center"
        >
          <div className="flex w-full flex-wrap gap-8 items-stretch justify-center">
            {data.sub_Services &&
              data.sub_Services.map((item: ServiceCardData) => {
                return (
                  <ServiceCard
                    href={Routes.Subservice(data.slug,item.slug)}
                    key={item.slug}
                    cardData={item}
                  />
                );
              })}
          </div>
        </ServiceSection>
      </div>

      <div className="md:max-w-7xl  lg:px-0 px-4 w-full mx-auto flex flex-col  gap-24 items-stretch">
        <WhyCard whyCardData={{
          heading:data.whyCard_heading,
          image:data.whyCard_image,
          para:data.whyCard_description,
          fetures:data.advantages
        }} />
        <HowItWorks id="howItworks" />
      </div>
    </div>
  );
};

export default Service;
