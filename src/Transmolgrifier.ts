import { ponder } from "@/generated";

ponder.on("Transmolgrifier:RoleAdminChanged", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("Transmolgrifier:RoleGranted", async ({ event, context }) => {
  console.log(event.params);
});
