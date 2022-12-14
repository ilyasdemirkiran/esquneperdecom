<script lang="ts">
  import type { HomeService } from "../../../models/HomeService";
  import Service from "./Service.svelte";
  export let services: HomeService[];
</script>

<div class="bg-neutral-900 my-1 text-slate-100 sm:flex-1 py-2">
  <div class="pl-2 pt-2">
    <h1 class="sm:text-xl pl-4">Hizmetlerimiz</h1>
    <hr class="my-1 mb-2 h-px bg-amber-400 border-0 " />
  </div>
  <div
    class="flex flex-col bg-neutral-800 p-2 space-y-2 sm:flex-row sm:justify-evenly sm:space-y-0 sm:space-x-2"
  >
    {#each services as service}
      <Service title={service.title} url={service.url} />
    {/each}
  </div>
</div>
