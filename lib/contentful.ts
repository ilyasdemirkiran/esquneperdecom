import { createClient } from "contentful";
import type { HomeImage, HomeService } from "@/types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getHeroImage(): Promise<string | null> {
  try {
    const response = await client.getEntry("66ZlldHKc3zubpafS3KJSq");
    const heroImage = response?.fields?.heroImage as any;
    return heroImage?.fields?.file?.url || null;
  } catch (error) {
    console.error("Error fetching hero image:", error);
    return null;
  }
}

export async function getGalleryImages(): Promise<HomeImage[]> {
  try {
    const response = await client.getEntry("66ZlldHKc3zubpafS3KJSq");

    const gallery = response?.fields?.gallery as any[];
    const data = gallery?.map((item: any) => {
      return {
        title: item?.fields?.title,
        description: item?.fields?.description,
        url: item?.fields?.file?.url,
      };
    });

    return data || [];
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}

export async function getServices(): Promise<HomeService[]> {
  try {
    const servicesEntries = await client.getEntries({ content_type: "services" });

    return servicesEntries.items.map((item: any) => {
      return {
        title: item?.fields?.coverImage?.fields?.title,
        url: item?.fields?.coverImage?.fields?.file?.url,
      };
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}
