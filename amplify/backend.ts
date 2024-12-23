import { defineBackend } from "@aws-amplify/backend";
import { doodleSocket } from "./functions/doodle-socket/resource";

defineBackend({
  doodleSocket,
});
