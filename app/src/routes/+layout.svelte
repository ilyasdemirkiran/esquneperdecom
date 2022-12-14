<script lang="ts">
  import "../app.css";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Oswald|Poppins|Rubik|Inter"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="flex flex-col w-full h-screen min-h-screen bg-neutral-800 font-[Inter] space-y-1"
>
  <slot />
</div>
