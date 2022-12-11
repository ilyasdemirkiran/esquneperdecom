// import { createClient } from "contentful";
import type { HomeImage } from "src/models/HomeImage";
import contentful from 'contentful'
// const contentful = require("contentful");

const client = contentful.createClient({
  space: "q8tvjpticwc2",
  environment: "master", // defaults to 'master' if not set
  accessToken: "_8sgaRvNS3MCgdZkkQ7Ok6YQvJtImL5YUa_m-suZOxc",
});

export async function load() {
  let data: HomeImage[] = [];

  const response = await client.getEntry("66ZlldHKc3zubpafS3KJSq");
  const servicesEntries = await client.getEntries({ content_type: "services" });
  
  data = response?.fields?.gallery?.map((item: Object) => {
    return {
      title: item?.fields?.title,
      description: item?.fields?.description,
      url: item?.fields?.file?.url,
    };
  });

  return {
    images: data,
    // service : servicesResponse?.fields?.coverImage
    services: servicesEntries.items.map((item) => {
      return {
        title: item?.fields?.coverImage?.fields?.title,
        url: item?.fields?.coverImage?.fields?.file?.url,
      };
    }),
  };
}
