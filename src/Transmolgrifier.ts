import { ponder } from "@/generated";

const COST_TO_TYPE_MAPPING = {
  "2": "Uncommon",
  "3": "Rare",
  "5": "Legendary",
  "10": "Mythical",
} as const;

const HAT_ID_TO_NAME_MAPPING = {
  10000039: "Fez",
  10000049: "Trapper",
  10000048: "TopHat",
  10000041: "Headphones",
  10000040: "Headband",
  10000038: "EnergyDome",
  10000037: "Boater",
  10000042: "HoodieBlue",
  10000043: "HoodieGray",
  10000044: "HoodieGreen",
  10000045: "HoodiePurple",
  10000046: "HoodieRed",
  10000047: "PomPom",
} as const;

ponder.on("Transmolgrifier:SmolRecipeAdded", async ({ event, context }) => {
  const { Recipe, Cost, RecipeGroup } = context.entities;

  const smol = event.params.smolData.smol;

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

  const recipeGroup = await RecipeGroup.upsert({
    id: smol.hat,
    create: {
      type: HAT_ID_TO_NAME_MAPPING[
        smol.hat as keyof typeof HAT_ID_TO_NAME_MAPPING
      ],
      cost: costEntity.id.toString(),
    },
    update: {},
  });

  await Recipe.create({
    id: event.params.smolRecipeId.toString(),
    data: {
      group: recipeGroup.id.toString(),
      ...smol,
    },
  });
});
