<script>
  import PhoneCall from "../../../components/PhoneCall.svelte";

</script>
<div
  class="h-96 w-full py-2 bg-neutral-900 text-slate-100 mt-1 flex flex-col space-y-2"
>
  <div class="pl-2 pt-2">
    <h1 class="sm:text-xl pl-4">İletişim</h1>
    <hr class="h-px rounded-sm w-full bg-amber-400 border-0 " />
  </div>
  <div
    class="flex-grow flex flex-col px-2 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
  >
    <div
      class="flex-1 rounded-md bg-neutral-900 flex flex-col space-y-2 justify-center items-center px-1 py-2 text-xs"
    >
      <span class="text-amber-400 text-lg">Fatih Kurak</span>
      <PhoneCall />
      <!-- <span class="text-lg">+90 534 325 9 444</span> -->
      <span>
        Başakşehir Mah. Süleyman Çelebi Cad Arterium 5.kısım, Istanbul, Turkey
      </span>
    </div>
    <div class="flex-1  bg-neutral-900">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.4684249635543!2d28.784266815365676!3d41.10245977929141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaf3f884ccf09%3A0xd60302f0b07ca663!2zQXJ0ZXJpdW0uNS5LxLFzxLFt!5e0!3m2!1str!2str!4v1670963653417!5m2!1str!2str"
        allowfullscreen={true}
        referrerpolicy="no-referrer-when-downgrade"
        title="Esqune Design Location"
        class="w-full h-full border-2 border-solid border-neutral-400 rounded-sm"
      />
    </div>
  </div>
</div>
