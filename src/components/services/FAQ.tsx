import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "What are Core IT Services?",
    content:
      "Core IT Services include infrastructure management, network security, system monitoring, cloud integration, and ongoing technical support to ensure smooth business operations.",
  },
  {
    value: "item-2",
    trigger: "How do Core IT Services benefit my business?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "How do Core IT Services benefit my business?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-4",
    trigger: "How do Core IT Services benefit my business?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
];

function AccordionBasic() {
  return (
    <Accordion
      type="single"
      collapsible
      className="lg:max-w-xl max-md:max-w-96 flex w-full flex-col gap-5"
      defaultValue="item-1"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="flex flex-col gap-4 rounded-xl bg-white p-4 px-6 border-border"
        >
          <AccordionTrigger className="md:text-lg text-base lg:w-[36rem] w-full font-medium md:leading-7">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-base max-w-max font-normal text-muted">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const FAQ = () => {
  return (
    <section className="flex lg:items-center lg:flex-row flex-col max-lg:gap-10   h-140 w-full md:max-w-7xl  lg:px-0  py-10 justify-between">
      <div className="flex-1 flex lg:items-center lg:max-w-md w-full lg:justify-center gap-4">
        <div className="flex flex-col items-start md:gap-4 gap-2 max-w-xl">
          <h1 className="text-primary md:text-4xl text-xl font-medium md:leading-[100%]">
            Frequently Asked  {" "}
            <span className="text-accent">Questions</span>
          </h1>
          <p className="lg:text-lg md:text-xl text-sm text-muted font-normal  lg:leading-[100%]">
            Have questions about our Core IT Services? We've answered some of
            the most common queries to help you better understand our approach,
            solutions, and support process.
          </p>
        </div>
      </div>

      <div className="max-lg:w-full w-fit ">
        <AccordionBasic />
      </div>
    </section>
  );
};

export default FAQ;
