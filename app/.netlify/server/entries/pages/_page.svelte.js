import { c as create_ssr_component, v as validate_component, d as add_attribute, o as onDestroy } from "../../chunks/index.js";
import _ from "lodash";
const PhoneCall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"tel:+905322182483"}" id="${"callnowbutton"}" class="${"flex px-2 py-1 justify-center items-center decoration-4 font-medium w-full sm:text-xs"}"><img alt="${"Call Now Button"}" src="${"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjAgNjAiPjxwYXRoIGQ9Ik03LjEwNCAxNC4wMzJsMTUuNTg2IDEuOTg0YzAgMC0wLjAxOSAwLjUgMCAwLjk1M2MwLjAyOSAwLjc1Ni0wLjI2IDEuNTM0LTAuODA5IDIuMSBsLTQuNzQgNC43NDJjMi4zNjEgMy4zIDE2LjUgMTcuNCAxOS44IDE5LjhsMTYuODEzIDEuMTQxYzAgMCAwIDAuNCAwIDEuMSBjLTAuMDAyIDAuNDc5LTAuMTc2IDAuOTUzLTAuNTQ5IDEuMzI3bC02LjUwNCA2LjUwNWMwIDAtMTEuMjYxIDAuOTg4LTI1LjkyNS0xMy42NzRDNi4xMTcgMjUuMyA3LjEgMTQgNy4xIDE0IiBmaWxsPSIjYWI2NzAxIi8+PHBhdGggZD0iTTcuMTA0IDEzLjAzMmw2LjUwNC02LjUwNWMwLjg5Ni0wLjg5NSAyLjMzNC0wLjY3OCAzLjEgMC4zNWw1LjU2MyA3LjggYzAuNzM4IDEgMC41IDIuNTMxLTAuMzYgMy40MjZsLTQuNzQgNC43NDJjMi4zNjEgMy4zIDUuMyA2LjkgOS4xIDEwLjY5OWMzLjg0MiAzLjggNy40IDYuNyAxMC43IDkuMSBsNC43NC00Ljc0MmMwLjg5Ny0wLjg5NSAyLjQ3MS0xLjAyNiAzLjQ5OC0wLjI4OWw3LjY0NiA1LjQ1NWMxLjAyNSAwLjcgMS4zIDIuMiAwLjQgMy4xMDVsLTYuNTA0IDYuNSBjMCAwLTExLjI2MiAwLjk4OC0yNS45MjUtMTMuNjc0QzYuMTE3IDI0LjMgNy4xIDEzIDcuMSAxMyIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="}" class="${"w-6"}">
  +90 534 325 9 444
</a>`;
});
const HomeEsqune = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"top-100 left-100 bg-neutral-900 p-2 text-amber-400 text-sm sm:text-xl flex "}"><div class="${"flex-grow flex items-center"}"><a href="${"/"}" class="${"hover:border-b-amber-100"}">ESQUNE Design</a></div>
  <div>${validate_component(PhoneCall, "PhoneCall").$$render($$result, {}, {}, {})}</div></div>`;
});
const HomeImageView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  console.log(image);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<img${add_attribute("src", `https:${image == null ? void 0 : image.url}?w=1024&h=1024`, 0)} alt="${""}" class="${"w-full h-96 object-cover"}">`;
});
const HomeImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let shownImageIndex = 0;
  let galleryInterval = setInterval(
    () => {
      if (_.isEmpty(images)) {
        return;
      }
      shownImageIndex = (shownImageIndex + 1) % images.length;
    },
    1500
  );
  onDestroy(() => {
    clearInterval(galleryInterval);
  });
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `<div class="${"w-full"}">${validate_component(HomeImageView, "HomeImageView").$$render($$result, { image: images[shownImageIndex] }, {}, {})}</div>`;
});
const HomeFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"py-2 w-full text-gray-200 text-xs bg-neutral-900 flex justify-center items-center sm:text-xs "}"><p>@2022 ESQUNE Design | Fatih Kurak</p></div>`;
});
const HomeServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col bg-neutral-900 m-2 px-1 py-2 text-slate-100"}"><div class="${"pl-1"}"><h1 class="${"sm:text-3xl"}">Hizmetlerimiz</h1>
    <hr class="${"my-1 h-px bg-amber-400 border-0 "}"></div>
  </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-sqnyb4_START -->${$$result.title = `<title>Esqune Perde</title>`, ""}<!-- HEAD_svelte-sqnyb4_END -->`, ""}

${validate_component(HomeEsqune, "HomeEsqune").$$render($$result, {}, {}, {})}
${validate_component(HomeImages, "HomeImages").$$render($$result, { images: data == null ? void 0 : data.images }, {}, {})}

${validate_component(HomeServices, "HomeServices").$$render($$result, {}, {}, {})}
${validate_component(HomeFooter, "HomeFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
