<script lang="ts">
  import type { HomeImage } from "../../../models/HomeImage";
  import HomeImageView from "./HomeImageView.svelte";
  import _ from "lodash";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css/core";
  import "@splidejs/svelte-splide/css";

  export let images: HomeImage[] = [];
</script>

<!-- <HomeImageView image={images[shownImageIndex]} /> -->
<div class="w-full p-2 bg-neutral-700">
  <Splide
    options={{
      rewind: true,
      autoplay: true,
      gap: "10rem",
      speed: 400,
    }}
  >
    {#each images as image (image.url)}
      <SplideSlide>
        <HomeImageView {image} />
      </SplideSlide>
    {/each}
  </Splide>
</div>
