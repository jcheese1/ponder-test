import { createPublicClient, http } from "viem";
import { arbitrum } from "viem/chains";

export const client = createPublicClient({
  chain: arbitrum,
  transport: http(process.env.PONDER_RPC_URL_42161),
});
