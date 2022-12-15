<script lang="ts">
  import HomeEsqune from "../components/home/esqune/HomeEsqune.svelte";
  import "../app.css";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Oswald|Poppins|Rubik|Inter"
    rel="stylesheet"
  />
</svelte:head>

<HomeEsqune />
<div
  class="flex flex-col w-full h-screen min-h-screen bg-neutral-800 font-[Inter] space-y-1"
>
  <slot />
</div>
