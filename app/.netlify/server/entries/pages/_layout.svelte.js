import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const PhoneCall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"tel:+905343259444"}" id="${"callnowbutton"}" class="${"text-xs flex px-2 py-1 justify-center items-center decoration-4 font-medium w-full"}"><img alt="${"Call Now Button"}" src="${"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjAgNjAiPjxwYXRoIGQ9Ik03LjEwNCAxNC4wMzJsMTUuNTg2IDEuOTg0YzAgMC0wLjAxOSAwLjUgMCAwLjk1M2MwLjAyOSAwLjc1Ni0wLjI2IDEuNTM0LTAuODA5IDIuMSBsLTQuNzQgNC43NDJjMi4zNjEgMy4zIDE2LjUgMTcuNCAxOS44IDE5LjhsMTYuODEzIDEuMTQxYzAgMCAwIDAuNCAwIDEuMSBjLTAuMDAyIDAuNDc5LTAuMTc2IDAuOTUzLTAuNTQ5IDEuMzI3bC02LjUwNCA2LjUwNWMwIDAtMTEuMjYxIDAuOTg4LTI1LjkyNS0xMy42NzRDNi4xMTcgMjUuMyA3LjEgMTQgNy4xIDE0IiBmaWxsPSIjYWI2NzAxIi8+PHBhdGggZD0iTTcuMTA0IDEzLjAzMmw2LjUwNC02LjUwNWMwLjg5Ni0wLjg5NSAyLjMzNC0wLjY3OCAzLjEgMC4zNWw1LjU2MyA3LjggYzAuNzM4IDEgMC41IDIuNTMxLTAuMzYgMy40MjZsLTQuNzQgNC43NDJjMi4zNjEgMy4zIDUuMyA2LjkgOS4xIDEwLjY5OWMzLjg0MiAzLjggNy40IDYuNyAxMC43IDkuMSBsNC43NC00Ljc0MmMwLjg5Ny0wLjg5NSAyLjQ3MS0xLjAyNiAzLjQ5OC0wLjI4OWw3LjY0NiA1LjQ1NWMxLjAyNSAwLjcgMS4zIDIuMiAwLjQgMy4xMDVsLTYuNTA0IDYuNSBjMCAwLTExLjI2MiAwLjk4OC0yNS45MjUtMTMuNjc0QzYuMTE3IDI0LjMgNy4xIDEzIDcuMSAxMyIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="}" class="${"w-5 h-5"}">
  +90 534 325 9 444
</a>`;
});
const HomeEsqune = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"sticky top-0 z-50 bg-neutral-900 p-2 text-amber-400 text-sm sm:text-xl flex hover:shadow-sm hover:shadow-amber-400 transition-all duration-500 shadow-2xl"}"><div class="${"flex-grow flex items-center"}"><a href="${"/"}" class="${"hover:border-b-amber-100"}">ESQUNE Design</a></div>
  <div class="${"flex justify-center items-center space-x-1"}">
    ${validate_component(PhoneCall, "PhoneCall").$$render($$result, {}, {}, {})}</div></header>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-11mfdht_START --><link href="${"https://fonts.googleapis.com/css?family=Oswald|Poppins|Rubik|Inter"}" rel="${"stylesheet"}"><!-- HEAD_svelte-11mfdht_END -->`, ""}

${validate_component(HomeEsqune, "HomeEsqune").$$render($$result, {}, {}, {})}
<div class="${"flex flex-col w-full h-screen min-h-screen bg-neutral-800 font-[Inter] space-y-1"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
