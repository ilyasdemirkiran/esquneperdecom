<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { HomeImage } from "../../../models/HomeImage";
  import HomeImageView from "./HomeImageView.svelte";
  import _ from "lodash";
  import HomeImageDescription from "./HomeImageDescription.svelte";

  export let images: HomeImage[] = [];
  let shownImageIndex: number = 0;
  let galleryInterval: NodeJS.Timer = setInterval(() => {
    if (_.isEmpty(images)) {
      return;
    }

    shownImageIndex = (shownImageIndex + 1) % images.length;
  }, 2000);

  onDestroy(() => {
    clearInterval(galleryInterval);
  });
</script>

<HomeImageView image={images[shownImageIndex]} />
