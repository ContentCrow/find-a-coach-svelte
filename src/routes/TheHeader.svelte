<script>
    import NavButton from "$lib/NavButton.svelte";
</script>

<header class="sticky top-0 bg-indigo-800 text-slate-100 dark:text-slate-300">
  <div class="max-w-4xl mx-auto p-4 flex items-center justify-between">
    <h1
      class="font-bold text-3xl select-none underline underline-offset-8 hover:scale-110 hover:-translate-y-2 transition-all duration-300"
    >
      Find a coach
    </h1>
    <nav class="flex gap-5 font-semibold">
      <a href="/" class="group">
        <NavButton>All Coaches</NavButton>
      </a>
      <a href="/requests" class="group">
        <NavButton>Requests</NavButton>
      </a>
      <a href="/register" class="group">
        <NavButton>Register</NavButton>
      </a>
    </nav>
  </div>
</header>
