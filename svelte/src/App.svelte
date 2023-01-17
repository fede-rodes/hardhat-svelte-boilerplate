<script lang="ts">
  import "./app.css";
  import { metamask } from "$stores/metamask";
  import { Header } from "$components/header";
  import { ModalConnect } from "$components/modal-connect";

  /** ModalConnect state */
  let isOpen = false;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }

  $: {
    if ($metamask.isConnected) {
      handleClose();
    }
  }
</script>

<Header on:connect={handleOpen} />

<main>
  <ModalConnect {isOpen} on:close={handleClose} />
</main>
