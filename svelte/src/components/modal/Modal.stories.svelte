<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Modal from "./Modal.svelte";

  let isOpen = false;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }
</script>

<Meta title="Modal" component={Modal} />

<Template let:args>
  <button type="button" on:click={handleOpen}>Open modal</button>
  <Modal {...args} on:close={handleClose} />
</Template>

<Story name="Main">
  <button type="button" on:click={handleOpen}>Open modal</button>
  <Modal {isOpen} on:close={handleClose} />
</Story>
