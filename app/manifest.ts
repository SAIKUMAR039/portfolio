import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sai Kumar Thota — Software Engineer",
    short_name: "Sai Kumar",
    description: "Software engineer building thoughtful web applications and practical AI-powered tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    icons: [
      {
        src: "/assets/developer-avatar.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
