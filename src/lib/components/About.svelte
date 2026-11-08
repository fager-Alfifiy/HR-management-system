
<script lang="ts">
import { Building, Target, Eye, CircleCheck } from '@lucide/svelte'; 
 const features = [
    'Centralized Employee Records',
    'Leave and Attendance Management',
    'HR Documents and Reports',
    'Role-Based Access' ];
</script>
<section
  id="about"
  class="scroll-mt-24 bg-white px-6 py-20 dark:bg-slate-900">
  <div class="mx-auto max-w-6xl">
    <div class="mb-12 text-center">
      <p class="font-semibold text-[#C65D32]">ABOUT HR CONNECT</p>
      <h2 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
        Simplifying Human Resources
      </h2>
      <p class="mx-auto mt-5 max-w-2xl leading-8 text-slate-500 dark:text-slate-300">
        HR Connect is an internal HR management platform designed
        to organize employee information, simplify HR processes,
        and improve workplace efficiency.
      </p> </div>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-2xl bg-[#FFF8F3] p-8 dark:bg-slate-800">
        <Target size={30} class="text-[#C65D32]" />
        <h3 class="mt-4 text-xl font-bold dark:text-white">Our Mission</h3>
        <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          To simplify HR operations and provide employees with
          easy access to workplace services.
        </p> </div>
      <div class="rounded-2xl bg-[#FFF8F3] p-8 dark:bg-slate-800">
        <Eye size={30} class="text-[#C65D32]" />
        <h3 class="mt-4 text-xl font-bold dark:text-white">Our Vision</h3>
        <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          To create a more organized and efficient digital
          workplace for employees and HR teams.
        </p> </div></div>
    <div class="mt-8 rounded-2xl border border-orange-100 p-8 dark:border-slate-700 dark:bg-slate-800">
      <div class="flex items-center gap-3">
<Building size={28} class="text-[#C65D32]" />
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">
          Why HR Connect?
        </h3></div>
      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        {#each features as feature}
          <div class="flex items-center gap-3">
<CircleCheck size={20} class="shrink-0 text-[#C65D32]" />
            <span class="text-slate-600 dark:text-slate-300">
              {feature}
            </span></div>
        {/each}
      </div></div></div></section>