<script lang="ts">
  import "./app.css";
  import { Header } from "./components/header";
  import { ModalConnect } from "./components/modal_connect";

  /** ModalConnect state */
  let isOpen = false;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }
</script>

<Header on:connect={handleOpen} />

<main>
  <ModalConnect {isOpen} on:close={handleClose} />
</main>
