import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://errion.com",
            lastModified: new Date(),
        },
    ];
}