import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: { email: true },
  userAttributes: {
    // optional, to match your UI fields
    givenName:  { required: false, mutable: true },
    familyName: { required: false, mutable: true },

    // ✅ custom attribute (note the quotes and the `custom:` prefix)
    "custom:wby_notes_app_group": {
      dataType: "String",
      mutable: true,
      maxLen: 64,
    },
  },
});
