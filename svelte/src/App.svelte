<script lang="ts">
  import "./app.css";
  import { Header } from "./components/header";
  import { ModalConnect } from "./components/modal_connect";

  /** Connect modal state */
  let isOpen = false;

  function handleConnect() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }
</script>

<Header on:connect={handleConnect} />

<main>
  <ModalConnect {isOpen} on:close={handleClose} />
</main>
