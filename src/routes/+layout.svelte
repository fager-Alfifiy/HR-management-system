
<script lang="ts">
  import '../app.css';
  import Navbar from '#lib/Navbar.svelte';

  let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-white">

  <Navbar />

  <main class="flex-1">
    {@render children()}
  </main>


  <footer class="border-t border-slate-200 bg-[#FFF8F3] px-6 py-6 text-center">
    <p class="text-sm text-slate-500">
      © 2026 HR Connect. All rights reserved.
    </p>
  </footer>

</div>
