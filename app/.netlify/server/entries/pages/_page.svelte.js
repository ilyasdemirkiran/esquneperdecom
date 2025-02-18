import { c as create_ssr_component, d as add_attribute, f as compute_rest_props, h as createEventDispatcher, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component, l as each, e as escape } from "../../chunks/index.js";
import "lodash";
const InstagramButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="${"./ig.svg"}" alt="${"Esqune Instagram Logo"}" class="${"w-5 h-5 cursor-pointer "}">`;
});
const HomeImageView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<img${add_attribute("src", `https:${image == null ? void 0 : image.url}?w=1024&h=1024`, 0)} alt="${""}" class="${"object-cover rounded-sm w-full h-96"}">`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide == null ? void 0 : splide.go(control);
  }
  function sync(target) {
    splide == null ? void 0 : splide.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="${"splide__list"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splideCore_min = "";
const splide_min = "";
const HomeImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `
<div class="${"w-full p-2 bg-neutral-700"}">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        rewind: true,
        autoplay: true,
        gap: "10rem",
        speed: 400
      }
    },
    {},
    {
      default: () => {
        return `${each(images, (image) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(HomeImageView, "HomeImageView").$$render($$result, { image }, {}, {})}
      `;
            }
          })}`;
        })}`;
      }
    }
  )}</div>`;
});
const HomeFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"mt-auto py-2 w-full text-gray-200 text-xs bg-neutral-800 flex justify-center items-center sm:text-xs"}"><p>@2022 ESQUNE Design</p></footer>
`;
});
const Service = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { url = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div class="${"flex flex-col"}"><h1 class="${"bg-slate-100 text-neutral-700 text-center py-1 shadow-lg rounded-t-sm"}">${escape(title)}</h1>
  <img${add_attribute("src", `https:${url}`, 0)} alt="${""}" class="${"max-h-[16rem] sm:max-h-[32rem] rounded-b-sm"}"></div>`;
});
const HomeServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { services } = $$props;
  if ($$props.services === void 0 && $$bindings.services && services !== void 0)
    $$bindings.services(services);
  return `<div class="${"bg-neutral-900 my-1 text-slate-100 sm:flex-1 py-2"}"><div class="${"pl-2 pt-2"}"><h1 class="${"sm:text-xl pl-4"}">Hizmetlerimiz</h1>
    <hr class="${"my-1 mb-2 h-px bg-amber-400 border-0 "}"></div>
  <div class="${"flex flex-col bg-neutral-800 p-2 space-y-2 sm:flex-row sm:justify-evenly sm:space-y-0 sm:space-x-2"}">${each(services, (service) => {
    return `${validate_component(Service, "Service").$$render($$result, { title: service.title, url: service.url }, {}, {})}`;
  })}</div></div>`;
});
const HomeContact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"h-96 w-full py-2 bg-neutral-900 text-slate-100 mt-1 flex flex-col space-y-2"}"><div class="${"pl-2 pt-2"}"><h1 class="${"sm:text-xl pl-4"}">\u0130leti\u015Fim</h1>
    <hr class="${"h-px rounded-sm w-full bg-amber-400 border-0 "}"></div>
  <div class="${"flex-grow flex flex-col px-2 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"}"><div class="${"flex-1 rounded-md bg-neutral-900 flex flex-col space-y-2 justify-center items-center px-1 py-2 text-xs text-center"}"><span class="${"text-amber-400 text-lg"}">ESQUNE DESIGN</span>
      <a href="${"tel:+905343259444"}" id="${"callnowbutton"}" class="${"flex items-center justify-center bg-green-900 w-36 rounded-md py-1 hover:bg-green-700 transition-all duration-300 hover:font-bold"}"><img alt="${"Call Now Button"}" src="${"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjAgNjAiPjxwYXRoIGQ9Ik03LjEwNCAxNC4wMzJsMTUuNTg2IDEuOTg0YzAgMC0wLjAxOSAwLjUgMCAwLjk1M2MwLjAyOSAwLjc1Ni0wLjI2IDEuNTM0LTAuODA5IDIuMSBsLTQuNzQgNC43NDJjMi4zNjEgMy4zIDE2LjUgMTcuNCAxOS44IDE5LjhsMTYuODEzIDEuMTQxYzAgMCAwIDAuNCAwIDEuMSBjLTAuMDAyIDAuNDc5LTAuMTc2IDAuOTUzLTAuNTQ5IDEuMzI3bC02LjUwNCA2LjUwNWMwIDAtMTEuMjYxIDAuOTg4LTI1LjkyNS0xMy42NzRDNi4xMTcgMjUuMyA3LjEgMTQgNy4xIDE0IiBmaWxsPSIjYWI2NzAxIi8+PHBhdGggZD0iTTcuMTA0IDEzLjAzMmw2LjUwNC02LjUwNWMwLjg5Ni0wLjg5NSAyLjMzNC0wLjY3OCAzLjEgMC4zNWw1LjU2MyA3LjggYzAuNzM4IDEgMC41IDIuNTMxLTAuMzYgMy40MjZsLTQuNzQgNC43NDJjMi4zNjEgMy4zIDUuMyA2LjkgOS4xIDEwLjY5OWMzLjg0MiAzLjggNy40IDYuNyAxMC43IDkuMSBsNC43NC00Ljc0MmMwLjg5Ny0wLjg5NSAyLjQ3MS0xLjAyNiAzLjQ5OC0wLjI4OWw3LjY0NiA1LjQ1NWMxLjAyNSAwLjcgMS4zIDIuMiAwLjQgMy4xMDVsLTYuNTA0IDYuNSBjMCAwLTExLjI2MiAwLjk4OC0yNS45MjUtMTMuNjc0QzYuMTE3IDI0LjMgNy4xIDEzIDcuMSAxMyIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="}" class="${"w-6"}">
        +90 534 325 9 444
      </a>
      <span class="${"w-full"}">Ba\u015Fak\u015Fehir Mah. S\xFCleyman \xC7elebi Cad Arterium 5.k\u0131s\u0131m, Istanbul, Turkey
      </span></div>
    <div class="${"flex-1 bg-neutral-900"}"><iframe src="${"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d298.27991006066804!2d28.787669138063535!3d41.10235043099747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaff01615a245%3A0x708a5e66800519a4!2zRVNRVU5FIFBFUkRFICYgRFVWQVIgS0HEnklESSBCQcWeQUvFnkVIxLBS!5e0!3m2!1str!2str!4v1674147297822!5m2!1str!2str"}" ${"allowfullscreen"} referrerpolicy="${"no-referrer-when-downgrade"}" title="${"Esqune Design Location"}" class="${"w-full h-full border-2 border-solid border-neutral-400 rounded-sm"}"></iframe></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-sqnyb4_START -->${$$result.title = `<title>Esqune Perde</title>`, ""}<!-- HEAD_svelte-sqnyb4_END -->`, ""}

<a href="${"https://www.instagram.com/esqune_perde/"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"w-full bg-neutral-800 flex justify-center items-center mt-1 space-x-1 py-2 animate-pulse duration-75"}">${validate_component(InstagramButton, "InstagramButton").$$render($$result, {}, {}, {})}
    <h2 class="${"text-xs text-gray-200 hover:shadow-lg"}">Modellerimiz ve Yapt\u0131\u011F\u0131m\u0131z i\u015Fler i\xE7in sayfam\u0131za bekleriz
    </h2></div></a>

${validate_component(HomeImages, "HomeImages").$$render($$result, { images: data == null ? void 0 : data.images }, {}, {})}
${validate_component(HomeServices, "HomeServices").$$render($$result, { services: data.services }, {}, {})}
${validate_component(HomeContact, "HomeContact").$$render($$result, {}, {}, {})}
${validate_component(HomeFooter, "HomeFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
