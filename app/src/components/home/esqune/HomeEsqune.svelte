<script>
  import PhoneCall from "../../PhoneCall.svelte";
  import InstagramButton from "../InstagramButton.svelte";
</script>

<header
  class="sticky top-0 z-50 bg-neutral-900 p-2 text-amber-400 text-sm sm:text-xl flex hover:shadow-sm hover:shadow-amber-400 transition-all duration-500 shadow-2xl"
>
  <div class="flex-grow flex items-center">
    <a href="/" class="hover:border-b-amber-100">ESQUNE Design</a>
  </div>
  <div class="flex justify-center items-center space-x-1">
    <!-- <InstagramButton /> -->
    <PhoneCall />
  </div>
</header>
