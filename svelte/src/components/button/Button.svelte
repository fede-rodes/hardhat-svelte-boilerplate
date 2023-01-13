<script lang="ts">
  export let size: "sm" | "md" | "lg";
</script>

{#if size === "md"}
  <button
    class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
    on:click
    {...$$props}
  >
    <slot />
  </button>
{/if}
