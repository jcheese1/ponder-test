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
      address: "0xbd12D635E0a17ef2cBf9af2E4683BAF9d20e4157",
      startBlock: 28728091,
    },
  ],
};
