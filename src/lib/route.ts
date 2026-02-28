const Routes = {
  blog: "/blog",
  blog_post: (slug: string) => `/blog/${slug}`,
  home: "/",
  service:(slug: string) => `/service/${slug}`
};

export default Routes;
