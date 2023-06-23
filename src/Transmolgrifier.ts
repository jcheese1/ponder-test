import { ponder, RecipeGroup } from "@/generated";
import { client } from "./client";
import rendererAbi from "./SmolsRenderer";
import { hexToString } from "viem";

const COST_TO_TYPE_MAPPING = {
  "3": "Hype",
  "2": "Vibes",
} as const;

const VR_TYPE = 10000028;

const HAT_ID_TO_NAME_MAPPING = {
  10000039: "Fez",
  10000048: "Trapper",
  10000040: "Headphones",
  10000038: "EnergyDome",
  10000037: "Boater",
  10000041: "HoodieBlue",
  10000042: "HoodieGray",
  10000043: "HoodieGreen",
  10000044: "HoodiePurple",
  10000045: "HoodieRed",
  10000047: "TopHat",
  [VR_TYPE]: "VR",
} as Record<number, RecipeGroup["type"]>;

const getSmolImage = async (smol: {
  background: number;
  body: number;
  clothes: number;
  mouth: number;
  glasses: number;
  hat: number;
  hair: number;
  skin: number;
  gender: number;
  headSize: number;
}) => {
  const imageHex = await client.readContract({
    address: "0x5278fCABDA2325E1F522107C80c9A592D36b1F8E",
    abi: rendererAbi,
    functionName: "generateSVG",
    args: [Object.values(smol)],
  });

  const buffer = Buffer.from(hexToString(imageHex as `0x${string}`));

  return `data:image/svg+xml;base64,${buffer.toString("base64")}`;
};

ponder.on("Transmolgrifier:SmolRecipeAdded", async ({ event, context }) => {
  const { Recipe, Cost, RecipeGroup } = context.entities;

  const smol = event.params.smolData.smol;

  const imageSvg = await getSmolImage(smol);

  let costEntity = await Cost.upsert({
    id: event.params.smolData.smolInputAmount,
    create: {
      type: COST_TO_TYPE_MAPPING[
        String(
          event.params.smolData.smolInputAmount
        ) as keyof typeof COST_TO_TYPE_MAPPING
      ],
    },
    update: {},
  });

  const targetTrait = smol.glasses === VR_TYPE ? smol.glasses : smol.hat;

  try {
    const recipeGroup = await RecipeGroup.upsert({
      id: targetTrait,
      create: {
        type: HAT_ID_TO_NAME_MAPPING[
          targetTrait as keyof typeof HAT_ID_TO_NAME_MAPPING
        ],
        cost: costEntity.id.toString(),
      },
      update: {},
    });

    await Recipe.create({
      id: event.params.smolRecipeId.toString(),
      data: {
        group: recipeGroup.id.toString(),
        image: imageSvg,
      },
    });
  } catch (e) {
    console.log("Error creating recipe", {
      smol,
      targetTrait,
    });
  }
});
