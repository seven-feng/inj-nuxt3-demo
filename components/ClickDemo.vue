<!-- components/ClickDemo.vue -->
<template>
  <div>
    <h1>Click Event Demo</h1>
    <button @click="connectKeplr">connect keplr</button>
  </div>
</template>

<script>
import {
  WalletStrategy,
  Wallet,
  // MsgBroadcaster,
} from "@injectivelabs/wallet-ts";
import { ChainId } from "@injectivelabs/ts-types";
//   import { MsgExecuteContractCompat } from '@injectivelabs/sdk-ts';
import { Network } from "@injectivelabs/networks";

export default {
  methods: {
    connectKeplr: async () => {
      // console.log("WalletStrategy", WalletStrategy)
      // console.log("ChainId", ChainId);
      // console.log("Network", Network);
      try {
        const walletStrategy = new WalletStrategy({
          chainId: ChainId.Testnet,
          ethereumOptions: {
            ethereumChainId: 5,
          },
        });
        walletStrategy.setWallet(Wallet.Keplr);

        const [address] = await walletStrategy.getAddresses();
        console.log("address", address);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
