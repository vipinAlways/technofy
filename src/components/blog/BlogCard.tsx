import Routes from "@/lib/route";
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
    slug: string;
  };
}) => {
  const { heading, image, info, para, slug } = blogCardData;
  return (
    <Link
      href={Routes.blog_post(slug)}
      className="w-full max-w-md rounded-2xl p-4 flex flex-col justify-center border border-border group hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-100 ease-linear"
    >
      <div className=" rounded-lg">
        <img src={image} alt={heading} className="w-full aspect-video object-cover mx-auto sm:mx-0 rounded-lg" />
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
