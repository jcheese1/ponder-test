import type { Config } from "@ponder/core";

export const config: Config = {
  networks: [
    {
      name: "arbitrum-goerli",
      chainId: 421613,
      rpcUrl: process.env.PONDER_RPC_URL_421613,
    },
  ],
  contracts: [
    {
      name: "Transmolgrifier",
      network: "arbitrum-goerli",
      abi: "./abis/Transmolgrifier.json",
      address: "0x3E1EAe7AE8c7ace33179A4DD55f83764C54aDDF8",
      startBlock: 32438911,
    },
  ],
};
