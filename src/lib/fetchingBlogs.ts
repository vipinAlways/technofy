import { Blog } from "@/index";
import { unstable_cache } from "next/cache";


export async function getBlog(slug: string): Promise<Blog> {
  const data = await (
    await fetch(
      `${process.env.DIRECTUS_URL}/items/check?filter[slug][_eq]=${slug}&fields=*,categories.check_blogId.*&access_token=${process.env.DIRECTUS_ACCESS_TOKEN}`,
      {
        next: { revalidate: 60 },
      },
    )
  ).json();
  return data.data.map((blog: Blog) =>
    blog.seo?.og_image
      ? {
          ...blog,
          seo: {
            ...blog.seo,
            og_image: `${process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL}/${blog.seo.og_image}`,
          },
        }
      : blog,
  )[0];
}

export const getBlogs = (limit = 12, offset = 0) =>
  unstable_cache(
    async (): Promise<{ blogs: Blog[]; total: number }> => {
      try {
        const res = await fetch(
          `${process.env.DIRECTUS_URL}/items/check` +
            `?filter[status][_eq]=published` +
            `&sort=-date_created` +
            `&limit=${limit}` +
            `&offset=${offset}` +
            `&meta=total_count` +
            `&access_token=${process.env.DIRECTUS_ACCESS_TOKEN}`,
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.status}`);
        }

        const data = await res.json();

        const og_image = (url:string) => {
         return url.split(".")[0];
        };
        // "/assets/8d690066-5a22-4266-aeef-d1c94a95cb47.jpg"

        const blogs =
          data?.data?.map((blog: Blog) =>
            blog.seo?.og_image
              ? {
                  ...blog,
                  seo: {
                    ...blog.seo,
                    og_image: `${process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL}/${og_image(blog.seo.og_image)}`,
                  },
                }
              : blog,
          ) ?? [];

        return {
          blogs,
          total: data?.meta?.total_count ?? 0,
        };
      } catch (e) {
        console.error("Error fetching blogs:", e);
        return {
          blogs: [],
          total: 0,
        };
      }
    },
    [`blogs:list:${limit}:${offset}`],
    {
      revalidate: 60,
      tags: ["blogs", `blogs:${limit}:${offset}`],
    },
  )();