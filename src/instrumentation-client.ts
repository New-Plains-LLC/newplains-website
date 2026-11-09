import { initBotId } from "botid/client/core";
import { INQUIRY_PATH } from "@/../lib/inquiry";

// Vercel BotID: runs an invisible check in the browser and attaches its
// result to requests on these paths. The route verifies it with
// checkBotId(); a path missing here makes that check fail.
initBotId({
  protect: [{ path: INQUIRY_PATH, method: "POST" }],
});
