<script lang="ts">
  import "./app.css";
  import { connexion } from "./stores/connexion";
  import { Header } from "./components/header";
  import { ModalConnect } from "./components/modal-connect";

  /** ModalConnect state */
  let isOpen = false;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }

  $: {
    if ($connexion.connected) {
      handleClose();
    }
  }
</script>

<!-- TODO: change name to open-modal -->
<Header on:connect={handleOpen} />

<main>
  <ModalConnect {isOpen} on:close={handleClose} />
</main>
