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

const _getBlogs = async (
  limit: number = 12,
  offset: number=0,
): Promise<{ blogs: Blog[]; total: number }> => {
  const res = await fetch(
    `${process.env.DIRECTUS_URL}/items/check` +
      `?filter[status][_eq]=published` +
      `&sort=-date_created` +
      `&limit=${limit}` +
      `&offset=${offset}` +
      `&meta=total_count` +
      `&access_token=${process.env.DIRECTUS_ACCESS_TOKEN}`,
  );

  if (!res.ok) throw new Error(`Failed to fetch blogs`);

  const data = await res.json();

  return {
    blogs: data?.data ?? [],
    total: data?.meta?.total_count ?? 0,
  };
};

export const getBlogs = unstable_cache(_getBlogs, ["blogs-list"], {
  revalidate: 60,
  tags: ["blogs"],
});
