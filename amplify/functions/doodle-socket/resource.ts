import { defineFunction } from "@aws-amplify/backend";

export const doodleSocket = defineFunction({
  name: "doodle-socket",
  entry: "./handler.ts",
});
