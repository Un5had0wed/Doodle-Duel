import type { Schema } from "../../data/resource";

export const handler: Schema["doodleSocket"]["functionHandler"] = async (
  event,
  context
) => {
  return "Hello, World!";
};
