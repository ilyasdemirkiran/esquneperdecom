<script lang="ts">
  import type { HomeImage } from "src/models/HomeImage";
  export let image: HomeImage;
</script>

<img
  src={`https:${image?.url}?w=1024&h=1024`}
  alt=""
  class="object-cover rounded-sm w-full h-96"
/>
