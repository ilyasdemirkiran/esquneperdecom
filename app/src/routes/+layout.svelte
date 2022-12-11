<script lang="ts">
  import "../app.css";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Oswald|Poppins|Rubik"
    rel="stylesheet"
  />
</svelte:head>

<div class="flex flex-col w-full h-screen min-h-screen bg-gray-100 font-[Rubik]">
  <slot />
</div>