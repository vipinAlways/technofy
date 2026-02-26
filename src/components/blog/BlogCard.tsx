import React from "react";

const BlogCard = ({
  blogCardData,
}: {
  blogCardData: {
    image: string;
    info: string;
    heading: string;
    para: string;
  };
}) => {
  const { heading, image, info, para } = blogCardData;
  return (
    <div className="w-full max-w-2xl rounded-2xl p-4 flex flex-col justify-center border border-border">
      <div className="3/2">
        <img
          src="/images/about-hero.png"
          alt="weewew"
          className="w-full h-full"
        />
      </div>

      <div className="pt-4 flex flex-col gap-3">
        <h3 className="text-muted font-medium leading-6 text-base">{info}</h3>
        <h1 className="leading-7 text-xl text-primary font-semibold">
          {heading}
        </h1>
        <p className="text-muted leading-6 text-base font-normal">{para}</p>
      </div>
    </div>
  );
};

export default BlogCard;
