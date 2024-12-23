import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { doodleSocket } from "../functions/doodle-socket/resource";

const schema = a.schema({
  doodleSocket: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())
    .handler(a.handler.function(doodleSocket)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
