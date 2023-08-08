<script>
  import "../app.css";
  import TheHeader from "./TheHeader.svelte";
</script>

<TheHeader />
<main
  class="max-w-4xl mx-auto p-4 mt-5 rounded-lg border-2 border-solid border-indigo-800 dark:border-slate-300"
>
  <slot />
</main>
