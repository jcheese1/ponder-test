import { createPublicClient, http } from "viem";
import { arbitrumGoerli } from "viem/chains";

export const client = createPublicClient({
  chain: arbitrumGoerli,
  transport: http(process.env.PONDER_RPC_URL_421613),
});
