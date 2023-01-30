/// <reference types="svelte" />
/// <reference types="vite/client" />

/*
 * https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */

interface ImportMetaEnv {
  readonly VITE_GREETER_CONTRACT_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
