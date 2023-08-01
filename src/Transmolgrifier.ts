import { ponder, RecipeGroup } from "@/generated";
import { client } from "./client";
import rendererAbi from "./SmolsRenderer";
import { hexToString } from "viem";

const COST_TO_TYPE_MAPPING = {
  "3": "Hype",
  "2": "Vibes",
} as const;

const HAT_ID_TO_NAME_MAPPING = {
  10000100: "AlligatorCostume",
  10000101: "BearCostume",
  10000102: "BullCostume",
  10000104: "CowCostume",
  10000105: "DinosaurCostume",
  10000106: "DuckCostume",
  10000108: "FoxCostume",
  10000109: "FrogCostume",
  10000110: "GrayCatCostume",
  10000111: "LionCostume",
  10000112: "MammothCostume",
  10000113: "MouseCostume",
  10000114: "OctopusCostume",
  10000115: "OrangeCatCostume",
  10000116: "PandaCostume",
  10000117: "PenguinCostume",
  10000118: "PigCostume",
  10000119: "RabbitCostume",
  10000120: "RaccoonCostume",
  10000121: "RhinoCostume",
  10000122: "SkunkCostume",
  10000123: "TurtleCostume",
  10000124: "WolfCostume",
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
    address: "0x069D6aaC7e14478928cd3497883097aC74F2d3A8",
    abi: rendererAbi,
    functionName: "generateSVG",
    args: [Object.values(smol)],
  });

  const buffer = Buffer.from(hexToString(imageHex as `0x${string}`));

  console.log({ buffer });

  return `data:image/svg+xml;base64,${buffer.toString("base64")}`;
};

ponder.on("Transmolgrifier:SmolTransmolgrified", async ({ event, context }) => {
  console.log({ event });
});

ponder.on("Transmolgrifier:SmolRecipeAdded", async ({ event, context }) => {
  console.log({ event });
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

  const targetTrait = smol.clothes;

  try {
    const recipeGroup = await RecipeGroup.upsert({
      id: targetTrait,
      create: {
        type: HAT_ID_TO_NAME_MAPPING[
          targetTrait as keyof typeof HAT_ID_TO_NAME_MAPPING
        ],
        cost: costEntity.id,
      },
      update: {},
    });

    await Recipe.create({
      id: event.params.smolRecipeId.toString(),
      data: {
        group: recipeGroup.id,
        image: imageSvg,
      },
    });
  } catch (e) {
    console.log("Error creating recipe", {
      smol,
      targetTrait,
      e,
      recipeID: event.params.smolRecipeId.toString(),
    });
  }
});
