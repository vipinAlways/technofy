import { unstable_cache } from "next/cache";
import { Service, ServiceCardData } from "..";

export const getAllParentServices = async () =>
  unstable_cache(
    async (): Promise<{
      service: Service[];
      serviceCard: ServiceCardData[];
    }> => {
      try {
        const res = await fetch(
          `${process.env.DIRECTUS_URL}/items/technofy_services` +
            `?access_token=${process.env.DIRECTUS_ACCESS_TOKEN}` +
            `&sort=-date_created` +
            `&fields=*,faq.*,advantages.*,sub_Services.slug,sub_Services.service_name,sub_Services.service_icon,sub_Services.short_description`,
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch services: ${res.status}`);
        }

        const data = await res.json();

        const service = data?.data ?? [];
        const serviceCard: ServiceCardData[] = data.data.map(
          (service: Service) => ({
            slug: service.slug,
            image: `${process.env.NEXT_PUBLIC_DIRECTUS_ASSETS_URL!}/${service.service_image}`,
            service_name: service.service_name,
            short_description: service.short_description,
            service_icon: service.service_icon,
            subServicesSlug:
              service.sub_Services?.map((sub) => ({
                slug: sub.slug,
                name: sub.service_name,
              })) ?? [],
          }),
        );

        

        return {
          service,
          serviceCard,
        };
      } catch (e) {
        console.error("Error fetching blogs:", e);
        return {
          service: [],
          serviceCard: [],
        };
      }
    },
    [`services:list`],
    {
      revalidate: 1,
      tags: ["services", `services:list`],
    },
  )();

export async function getSubService(slug: string): Promise<any> {
  const data = await (
    await fetch(
      `${process.env.DIRECTUS_URL}/items/technofy_subServices` +
        `?filter[slug][_eq]=${slug}` +
        `&access_token=${process.env.DIRECTUS_ACCESS_TOKEN}` +
        `&sort=-date_created` +
        `&fields=*,faq.*,advantages.*,short_description,solutions.*`,
      {
        next: { revalidate: 60 },
      },
    )
  ).json();
 
  return data.data[0];
}
export async function getService(slug: string): Promise<Service> {
  const data = await (
    await fetch(
      `${process.env.DIRECTUS_URL}/items/technofy_services` +
        `?filter[slug][_eq]=${slug}` +
        `&access_token=${process.env.DIRECTUS_ACCESS_TOKEN}` +
        `&sort=-date_created` +
        `&fields=*,faq.*,advantages.*,sub_Services.slug,sub_Services.service_name,sub_Services.service_icon,sub_Services.short_description`,
      {
        next: { revalidate: 60 },
      },
    )
  ).json();

  return data.data[0];
}

