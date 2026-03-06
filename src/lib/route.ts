const Routes = {
  blog: "/blog",
  blog_post: (slug: string,page:number) => `/blog/${slug}?page=${page}`,
  home: "/",
  service:(slug: string) => `/services/${slug}`,
  Subservice:(service:string,slug: string) => `/services/${service}/sub-service/${slug}`,
  contact:"/contact"
};

export default Routes;
