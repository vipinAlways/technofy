const Routes = {
  blog: "/blog",
  blog_post: (slug: string) => `/blog/${slug}`,
  home: "/",
  service:(slug: string) => `/services/${slug}`,
  Subservice:(service:string,slug: string) => `/services/${service}/sub-service/${slug}`
};

export default Routes;
