<script lang="ts">
  import type { HomeImage } from "src/models/HomeImage";

  export let image: HomeImage;
</script>

<img
  src={`https:${image?.url}?w=1024&h=1024`}
  alt=""
  class="w-full h-96 object-cover max-h-[300px]"
/>
