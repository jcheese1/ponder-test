import { ponder } from "@/generated";

ponder.on("Transmolgrifier:SmolRecipeAdded", async ({ event, context }) => {
  const { Recipe, Cost, Smol } = context.entities;

  const smol = event.params.smolData.smol;

  await Smol.create({
    id: event.params.smolRecipeId.toString(),
    data: smol,
  });

  await Recipe.create({
    id: event.params.smolRecipeId.toString(),
    data: {
      cost: event.params.smolData.smolInputAmount,
      smol: event.params.smolRecipeId.toString(),
    },
  });

  let costEntity = await Cost.findUnique({
    id: event.params.smolData.smolInputAmount,
  });

  if (!costEntity) {
    await Cost.create({
      id: event.params.smolData.smolInputAmount,
      data: {},
    });
  }
});
