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
      address: "0x10d9Db448Ed04c20BB614cb82152D13c147ed2cb",
      startBlock: 27166586,
    },
  ],
};
