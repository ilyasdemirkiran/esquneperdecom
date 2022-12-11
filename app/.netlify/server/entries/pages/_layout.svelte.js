import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-4mwhjj_START --><link href="${"https://fonts.googleapis.com/css?family=Oswald|Poppins|Rubik"}" rel="${"stylesheet"}"><!-- HEAD_svelte-4mwhjj_END -->`, ""}

<div class="${"flex flex-col w-full h-screen bg-gray-100 font-[Rubik]"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
