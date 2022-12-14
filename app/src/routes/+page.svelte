<script lang="ts">
  import HomeEsqune from "../components/home/esqune/HomeEsqune.svelte";
  import type { HomeImage } from "../models/HomeImage";
  import type { HomeService } from "../models/HomeService";
  import HomeImages from "../components/home/gallery/HomeImages.svelte";
  import HomeFooter from "../components/home/footer/HomeFooter.svelte";
  import HomeServices from "../components/home/services/HomeServices.svelte";
  import HomeContact from "../components/home/contact/HomeContact.svelte";

  export let data: { images: HomeImage[]; services: HomeService[] };
</script>

<svelte:head>
  <title>Esqune Perde</title>
</svelte:head>

<HomeEsqune />
<HomeImages images={data?.images} />
<HomeServices services={data.services} />
<HomeContact />
<HomeFooter />
