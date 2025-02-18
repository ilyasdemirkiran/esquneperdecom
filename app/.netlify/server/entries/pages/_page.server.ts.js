import contentful from "contentful";
const client = contentful.createClient({
  space: "q8tvjpticwc2",
  environment: "master",
  accessToken: "_8sgaRvNS3MCgdZkkQ7Ok6YQvJtImL5YUa_m-suZOxc"
});
async function load() {
  var _a, _b;
  let data = [];
  const response = await client.getEntry("66ZlldHKc3zubpafS3KJSq");
  const servicesEntries = await client.getEntries({ content_type: "services" });
  data = (_b = (_a = response == null ? void 0 : response.fields) == null ? void 0 : _a.gallery) == null ? void 0 : _b.map((item) => {
    var _a2, _b2, _c, _d;
    return {
      title: (_a2 = item == null ? void 0 : item.fields) == null ? void 0 : _a2.title,
      description: (_b2 = item == null ? void 0 : item.fields) == null ? void 0 : _b2.description,
      url: (_d = (_c = item == null ? void 0 : item.fields) == null ? void 0 : _c.file) == null ? void 0 : _d.url
    };
  });
  return {
    images: data,
    services: servicesEntries.items.map((item) => {
      var _a2, _b2, _c, _d, _e, _f, _g;
      return {
        title: (_c = (_b2 = (_a2 = item == null ? void 0 : item.fields) == null ? void 0 : _a2.coverImage) == null ? void 0 : _b2.fields) == null ? void 0 : _c.title,
        url: (_g = (_f = (_e = (_d = item == null ? void 0 : item.fields) == null ? void 0 : _d.coverImage) == null ? void 0 : _e.fields) == null ? void 0 : _f.file) == null ? void 0 : _g.url
      };
    })
  };
}
export {
  load
};
