import { unstable_cache } from "next/cache";
import { Blog, Service, ServiceCardData } from "..";

export const getAllParentServices = async () =>
  unstable_cache(
    async (): Promise<{
      service: Service[];
      serviceCard: ServiceCardData[];
    }> => {
      try {
        const res = await fetch(
          `${process.env.DIRECTUS_URL}/items/services` +
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
      `${process.env.DIRECTUS_URL}/items/subServices` +
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
      `${process.env.DIRECTUS_URL}/items/services` +
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
/*
  
  https://cms.renovlange.de/items/city?access_token=${process.env.DIRECTUS_ACCESS_TOKEN}&fields=*,providers.providers_id.*,providers.providers_id.core_values,providers.providers_id.core_values.image,providers.providers_id.core_values.title,providers.providers_id.core_values.description,case_studies.*,case_studies.Title,case_studies.Content,case_studies.Image,districts_collection.districts_collection_id.*,districts_collection.districts_collection_id.providers.providers_id.*,districts_collection.districts_collection_id.providers.providers_id.core_values,districts_collection.districts_collection_id.providers.providers_id.core_values.image,districts_collection.districts_collection_id.providers.providers_id.core_values.title,districts_collection.districts_collection_id.providers.providers_id.core_values.description,districts_collection.districts_collection_id.case_studies.*,districts_collection.districts_collection_id.case_studies.Title,districts_collection.districts_collection_id.case_studies.Content,districts_collection.districts_collection_id.case_studies.Image,districts_collection.districts_collection_id.stone_carousel_images.directus_files_id,stone_carousel_images.directus_files_id,before_image.directus_files_id,after_image.directus_files_id,testimonials_image.directus_files_id,location_above_footer.*
  */
