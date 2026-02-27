import Link from "next/link";
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
    <Link
      href={`/blog/${heading
        .replace(/\u00A0/g, "")
        .replace(/\s+/g, "")
        .trim()}`}
      className="w-full max-w-md rounded-2xl p-4 flex flex-col justify-center border border-border group hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-100 ease-linear"
    >
      <div className="aspect-3/2 rounded-lg">
        <img
          src="/images/about-hero.png"
          alt="weewew"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="pt-4 flex flex-col gap-3">
        <h3 className="text-muted font-medium leading-6 text-base">{info}</h3>
        <h1 className="leading-7 text-xl text-primary font-semibold group-hover:text-accent transition-all duration-100 ease-linear ">
          {heading}
        </h1>
        <p className="text-muted leading-6 text-base font-normal">{para}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
