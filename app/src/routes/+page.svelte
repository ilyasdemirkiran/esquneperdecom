<script lang="ts">
  import HomeEsqune from "../components/home/esqune/HomeEsqune.svelte";
  import type { HomeImage } from "../models/HomeImage";
  import type { HomeService } from "../models/HomeService";
  import HomeImages from "../components/home/gallery/HomeImages.svelte";
  import HomeFooter from "../components/home/footer/HomeFooter.svelte";
  import HomeServices from "../components/home/services/HomeServices.svelte";
  import HomeContact from "../components/home/contact/HomeContact.svelte";
  import InstagramButton from "../components/home/InstagramButton.svelte";

  export let data: { images: HomeImage[]; services: HomeService[] };
</script>

<svelte:head>
  <title>Esqune Perde</title>
</svelte:head>

<a
  href="https://www.instagram.com/esqune_perde/"
  target="_blank"
  rel="noreferrer"
>
  <div
    class="w-full bg-neutral-800 flex justify-center items-center mt-1 space-x-1 py-2 animate-pulse duration-75"
  >
    <InstagramButton />
    <h2 class="text-xs text-gray-200 hover:shadow-lg">
      Modellerimiz ve Yaptığımız işler için sayfamıza bekleriz
    </h2>
  </div>
</a>

<HomeImages images={data?.images} />
<HomeServices services={data.services} />
<HomeContact />
<HomeFooter />
