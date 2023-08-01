import type { Config } from "@ponder/core";

export const config: Config = {
  networks: [
    {
      name: "arbitrum",
      chainId: 42161,
      rpcUrl: process.env.PONDER_RPC_URL_42161,
    },
  ],
  contracts: [
    {
      name: "Transmolgrifier",
      network: "arbitrum",
      abi: "./abis/Transmolgrifier.json",
      address: "0xD9480355d534a428a36E0FeCFf310A731Ff6ce11",
      startBlock: 107514351,
    },
  ],
};
