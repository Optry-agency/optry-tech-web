import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site-url";

const baseUrl = getBaseUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios",
    "/servicios/software-a-medida",
    "/servicios/automatizacion-con-ia",
    "/servicios/ciberseguridad",
    "/casos",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
