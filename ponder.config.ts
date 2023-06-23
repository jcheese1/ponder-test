import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
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
      address: "0xA747694D45b28b62F96183e0e9cA3aE69CC59aD8",
      startBlock: 27586658,
    },
  ],
};
