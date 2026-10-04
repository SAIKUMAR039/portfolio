import { MetadataRoute } from "next";
import { featuredProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saikumarthota.site";
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = featuredProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes,
    {
      url: `${baseUrl}/marketing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
