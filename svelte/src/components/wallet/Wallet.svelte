<script>
  import { ethers } from "ethers";
  import metamaskIcon from "../../assets/metamask.svg";
  import coinbaseIcon from "../../assets/coinbase.svg";

  let account;
  let connectWalletError;
  let walletConnected = false;

  async function connectWallet() {
    walletConnected = false;
    const { ethereum } = window;
    console.log("ethereum: ", ethereum);
    console.log("Connecting wallet");
    await ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accountList) => {
        const [firstAccount] = accountList;
        account = firstAccount;
        walletConnected = true;
        console.log("wallet connected");
        console.log(account);
      })
      .catch((error) => {
        walletConnected = false;
        connectWalletError = error;
        console.log("error connecting wallet");
      });
  }
</script>

<div class="walletButtonGroup justifyCenter">
  {#if walletConnected}
    <div>
      <span class="dotConnected" />
      Connected Account: {account}
    </div>
  {:else}
    <button class="button buttonMetaMask" on:click={connectWallet}>
      Connect MetaMask
    </button>
  {/if}

  <div class="network">
    After connecting MetaMask, please switch to Ropsten TestNet.
  </div>
</div>

<!-- Modal content -->
<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
  <button
    type="button"
    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
    data-modal-hide="crypto-modal"
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
    <span class="sr-only">Close modal</span>
  </button>
  <!-- Modal header -->
  <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
    <h3
      class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
    >
      Connect wallet
    </h3>
  </div>
  <!-- Modal body -->
  <div class="p-6">
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
      Connect with one of our available wallet providers or create a new one.
    </p>
    <ul class="my-4 space-y-3">
      <li>
        <a
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <img src={metamaskIcon} class="h-4" alt="Metamask icon" />
          <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <img src={coinbaseIcon} class="h-5" alt="Coinbase icon" />
          <span class="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <svg
            aria-hidden="true"
            svg
            class="h-5"
            viewBox="0 0 75.591 75.591"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><linearGradient
              id="a"
              gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
              gradientUnits="userSpaceOnUse"
              x2="1"
              ><stop offset="0" stop-color="#ff1b2d" /><stop
                offset=".3"
                stop-color="#ff1b2d"
              /><stop offset=".614" stop-color="#ff1b2d" /><stop
                offset="1"
                stop-color="#a70014"
              /></linearGradient
            ><linearGradient
              id="b"
              gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
              gradientUnits="userSpaceOnUse"
              x2="1"
              ><stop offset="0" stop-color="#9c0000" /><stop
                offset=".7"
                stop-color="#ff4b4b"
              /><stop offset="1" stop-color="#ff4b4b" /></linearGradient
            ><g transform="matrix(1.3333 0 0 -1.3333 0 107.2)"
              ><path
                d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                fill="url(#a)"
              /><path
                d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                fill="url(#b)"
              /></g
            ></svg
          >
          <span class="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <svg
            aria-hidden="true"
            class="h-5"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><defs
              ><radialGradient
                cx="0%"
                cy="50%"
                fx="0%"
                fy="50%"
                r="100%"
                id="radialGradient-1"
                ><stop stop-color="#5D9DF6" offset="0%" /><stop
                  stop-color="#006FFF"
                  offset="100%"
                /></radialGradient
              ></defs
            ><g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              ><g id="logo"
                ><rect
                  id="base"
                  fill="url(#radialGradient-1)"
                  x="0"
                  y="0"
                  width="512"
                  height="512"
                  rx="256"
                /><path
                  d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z"
                  id="WalletConnect"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                /></g
              ></g
            ></svg
          >
          <span class="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <svg
            aria-hidden="true"
            class="h-4"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z"
              fill="#617BFF"
            /><path
              d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z"
              fill="#617BFF"
            /></svg
          >
          <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
        </a>
      </li>
    </ul>
    <div>
      <a
        href="#"
        class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
      >
        <svg
          aria-hidden="true"
          class="w-3 h-3 mr-2"
          focusable="false"
          data-prefix="far"
          data-icon="question-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          ><path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
          /></svg
        >
        Why do I need to connect with my wallet?</a
      >
    </div>
  </div>
</div>
