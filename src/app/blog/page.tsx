import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBlogs } from "@/lib/fetchingBlogs";
import Routes from "@/lib/route";
import Pagination from "@/components/blog/Pagination";

// const blogData: {
//   image: string;
//   info: string;
//   heading: string;
//   para: string;
// }[] = [
//   {
//     image: "/images/blog.png",
//     info: "Posted by Karan on 24 Feb 2026",
//     heading: "Boost Your Business with Smart IT Solutions",
//     para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
//   },
//   {
//     image: "/images/blog.png",
//     info: "Posted by Karan on 24 Feb 2026",
//     heading: "Boost Your Business with Smart IT Solutions",
//     para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
//   },
//   {
//     image: "/images/blog.png",
//     info: "Posted by Karan on 24 Feb 2026",
//     heading: "Boost Your Business with Smart IT Solutions",
//     para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
//   },
//   {
//     image: "/images/blog.png",
//     info: "Posted by Karan on 24 Feb 2026",
//     heading: "Boost Your Business with Smart IT Solutions",
//     para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
//   },
//   {
//     image: "/images/blog.png",
//     info: "Posted by Karan on 24 Feb 2026",
//     heading: "Boost Your Business with Smart IT Solutions",
//     para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
//   },
//   {
//     image: "/images/blog.png",
//     info: "Posted by Karan on 24 Feb 2026",
//     heading: "Boost Your Business with Smart IT Solutions",
//     para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
//   },
// ];

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const page = Number((await searchParams).page) || 1;

  const limit = 12;
  const offset = (page - 1) * limit;

  const { blogs, total } = await getBlogs(limit, offset);

  return (
    <div className="flex flex-col md:gap-24 gap-12 py-24 pt-32 ">
      <section
        id="hero"
        className={"md:max-w-7xl  lg:px-0 px-4  mx-auto  space-y-10"}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Content */}
        <div className="flex items-center justify-center w-full">
          <div
            className={
              "relative z-10 flex  justify-center items-center lg:w-[70%] flex-col gap-8"
            }
          >
            <div className="text-center flex flex-col gap-3">
              <h1 className="md:text-6xl text-4xl md:leading-[4.25rem] font-bold  text-primary">
                <span className="text-accent">Insights</span> &{" "}
                <span className="text-accent">Resources</span> for Smarter IT
                Decisions
              </h1>
              <p className="ms:text-lg  md:leading-7 text-base text-muted">
                Stay updated with expert articles, cybersecurity tips, and IT
                strategies designed to help business stay secure, efficient, and
                future-ready
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative items-end  w-full  aspect-[32/15] md:p-[3.75rem] p-6 rounded-3xl ">
          <div className="absolute inset-0 bg-black/20 rounded-3xl z-10"></div>
          <div className="w-full h-full absolute top-0 left-0 ">
            <img
              src="/images/blog-hero.png"
              alt=" Smart IT Solutions That Drive Business Growth"
              className="
          w-full h-full object-cover object-center -z-20 rounded-3xl"
              loading="eager"
            />
          </div>
          <div className="flex flex-col gap-3 h-fit max-w-3xl w-full text-white z-10">
            <h1 className="md:text-3xl text-2xl font-semibold">
              sdjekfug ewfgey fed dhvc
            </h1>
            <p className="md:text-lg  text-base">
              eqwfgyehfkjwerhfbrbgjnr enqvehfyugqeugjfjefhk feufhuiq
              fyefgqeufgeu eqwfgyehfkjwerhfbrbgjnr enqvehfyugqeugjfjefhk
              feufhuiq fyefgqeufgeu eqwfgyehfkjwerhfbrbgjnr
              enqvehfyugqeugjfjefhk feufhuiq fyefgqeufgeu
            </p>
          </div>
        </div>
      </section>

      <section
        id="blogs"
        className="md:max-w-7xl  lg:px-0 px-4 mx-auto  flex flex-col gap-12 md:gap-20"
      >
        <h1 className="font-semibold text-primary md:text-4xl text-2xl leading-10">
          Read our Latest Blogs
        </h1>

        <div className="flex md:flex-row flex-col  w-full items-start gap-8">
          {/* Blog Grid */}
          <div className="w-full  ">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6">
              {blogs.length > 0 ? (
                blogs.map((data, index) => (
                  <BlogCard
                    key={index}
                    blogCardData={{
                      heading: data.title ?? "",
                      image: data.thumbnail ?? data.seo.og_image,
                      info: new Date(data.date_created).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        },
                      ),
                      para: data.seo.meta_description,
                      slug: data.slug,
                      page: Math.ceil(total / limit),
                    }}
                  />
                ))
              ) : (
                <h1 className="text-primary">No Blog Post Right Now</h1>
              )}
            </div>

            <Pagination page={page} totalPages={Math.ceil(total / limit)} />
          </div>

          {/* Sidebar */}
          <div className="md:sticky md:top-20 bg-accent max-w-md rounded-xl p-4 gap-5 flex flex-col h-fit">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl leading-7 font-medium text-white">
                Need IT Solutions?
              </h3>
              <p className="text-lg leading-7 font-normal text-muted-foreground">
                Let us help you grow your business with smart technology.
              </p>
            </div>

            <Button
              asChild
              className="px-8 py-6  font-semibold text-lg leading-[100%] rounded-[0.5rem]"
            >
              <Link href={Routes.contact}>Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
