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
      address: "0x265E1c430Fd8663370E8a110a99942B88E2829BC",
      startBlock: 26241822,
    },
  ],
};
