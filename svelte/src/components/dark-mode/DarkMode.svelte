<script lang="ts">
  import SunIcon from "@assets/Sun.svelte";
  import MoonIcon from "@assets/Moon.svelte";

  function toggleTheme() {
    const isDark = window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  }
</script>

<svelte:head>
  <script>
    if (window != null) {
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? window.document.documentElement.classList.add("dark")
        : window.document.documentElement.classList.remove("dark");
    }
  </script>
</svelte:head>

<button
  on:click={toggleTheme}
  aria-label="Dark mode"
  type="button"
  {...$$restProps}
>
  <MoonIcon class="hidden dark:block h-5 w-5" />
  <SunIcon class="dark:hidden h-5 w-5" />
</button>
