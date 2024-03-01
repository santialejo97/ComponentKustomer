import { action, input } from "@prismatic-io/spectral";

const myConnectionField = input({
  label: "Connection",
  type: "connection",
  required: true,
});

const myInputField = input({
  label: "My Input",
  type: "string",
  required: true,
});

export const myAction = action({
  display: {
    label: "My Action",
    description: "This is my action",
  },
  perform: async (context, { connection, myInput }) => {
    const client = createClient(connection);
    return {
      data: await client.call(myInput),
    };
  },
  inputs: {
    connection: myConnectionField,
    myInput: myInputField,
  },
});

export default { myAction };
