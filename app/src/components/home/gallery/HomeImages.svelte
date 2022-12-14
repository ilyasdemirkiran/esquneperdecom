<script lang="ts">
  import type { HomeImage } from "../../../models/HomeImage";
  import HomeImageView from "./HomeImageView.svelte";
  import _ from "lodash";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css/core";
  import "@splidejs/svelte-splide/css";

  export let images: HomeImage[] = [];
  // let shownImageIndex: number = 0;
  // let galleryInterval: NodeJS.Timer = setInterval(() => {
  //   if (_.isEmpty(images)) {
  //     return;
  //   }

  //   shownImageIndex = (shownImageIndex + 1) % images.length;
  // }, 2000);

  // onDestroy(() => {
  //   clearInterval(galleryInterval);
  // });
</script>

<!-- <HomeImageView image={images[shownImageIndex]} /> -->
<div class="w-full p-2 bg-neutral-700">
  <Splide
    options={{
      rewind: true,
      autoplay: true,
      arrows: false,
      gap: "10rem",
      speed: 2000,
      // height: "h-[100%]",
      // padding: { right: 10, left: 10 },
      // perPage: 2,
    }}
  >
    {#each images as image (image.url)}
      <SplideSlide>
        <HomeImageView {image} />
      </SplideSlide>
    {/each}
  </Splide>
</div>
