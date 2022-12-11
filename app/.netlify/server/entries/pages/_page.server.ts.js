import { createClient } from "contentful";
const client = createClient({
  space: "q8tvjpticwc2",
  environment: "master",
  accessToken: "_8sgaRvNS3MCgdZkkQ7Ok6YQvJtImL5YUa_m-suZOxc"
});
async function load() {
  var _a, _b, _c;
  let data = [];
  const response = await client.getEntry("66ZlldHKc3zubpafS3KJSq");
  const servicesResponse = await client.getEntry("PfabGvI2SqBXiNKAvtIiR");
  console.log("coverImage", (_a = servicesResponse == null ? void 0 : servicesResponse.fields) == null ? void 0 : _a.coverImage);
  data = (_c = (_b = response == null ? void 0 : response.fields) == null ? void 0 : _b.gallery) == null ? void 0 : _c.map((item) => {
    var _a2, _b2, _c2, _d;
    return {
      title: (_a2 = item == null ? void 0 : item.fields) == null ? void 0 : _a2.title,
      description: (_b2 = item == null ? void 0 : item.fields) == null ? void 0 : _b2.description,
      url: (_d = (_c2 = item == null ? void 0 : item.fields) == null ? void 0 : _c2.file) == null ? void 0 : _d.url
    };
  });
  return {
    images: data
  };
}
export {
  load
};
