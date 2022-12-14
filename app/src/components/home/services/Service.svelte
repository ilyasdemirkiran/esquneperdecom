<script lang="ts">
  export let title: string = "";
  export let url: string = "";
</script>

<div class="flex flex-col hover:shadow-sm hover:shadow-amber-300 transition-all duration-700 hover:text-xl">
  <h1
    class="bg-slate-100 text-neutral-700 text-center py-1 shadow-lg rounded-t-sm"
  >
    {title}
  </h1>
  <img
    src={`https:${url}`}
    alt=""
    class="max-h-[16rem] sm:max-h-[32rem] rounded-b-sm"
  />
</div>
