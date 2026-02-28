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
      className="max-w-xl flex flex-col gap-5"
      defaultValue="item-1"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="flex flex-col gap-4 rounded-xl bg-white p-4 px-6 border-border"
        >
          <AccordionTrigger className="text-lg font-medium leading-7">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-base font-normal text-muted">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const FAQ = () => {
  return (
    <section className="flex items-center h-140 w-full max-w-7xl py-10 justify-between">
      <div className="flex-1 flex items-center max-w-md   justify-center gap-4">
        <div className="flex flex-col items-start gap-4 max-w-xl">
          <h1 className="text-primary text-4xl font-medium leading-[100%]">
            Frequently Asked <br />{" "}
            <span className="text-accent">Questions</span>
          </h1>
          <p className="text-lg text-muted font-normal leading-[100%]">
            Have questions about our Core IT Services? We've answered some of
            the most common queries to help you better understand our approach,
            solutions, and support process.
          </p>
        </div>
      </div>

      <div className="w-fit ">
        <AccordionBasic />
      </div>
    </section>
  );
};

export default FAQ;
