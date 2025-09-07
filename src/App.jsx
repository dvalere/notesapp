import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  Authenticator,
} from "@aws-amplify/ui-react";
import { signUp } from "@aws-amplify/auth";

const App = ({  }) => {

  const formFields = {
    signUp: {
      given_name: {
        placeholder: 'Enter your first name',
        isRequired: true,
        label: 'First Name'
      },
      family_name: {
        placeholder: 'Enter your last name',
        isRequired: true,
        label: 'Last Name'
      }
    },
  }
  const signUpAttributes = ["email", "given_name", "family_name"];

  return (
    <Authenticator
      formFields={formFields}
      signUpAttributes={signUpAttributes}
      /* Passing the addition wby_notes_app_group attribute to the signUp method
       * We use this attribute to assign the user to the notes-app-users group
       * The notes-app-users group has the necessary permissions to access the notes content in Webiny side
       */
      services={{
        async handleSignUp(formData) {
          const { options, username, password } = formData;
          options.userAttributes["custom:wby_notes_app_group"] = "notes-app-users";
          const res = await signUp({
            username,
            password,
            options,
          });
          return res;
        }
      }}
    >
      {({ signOut, user }) => (
        <main>
          <div className="header">
            <Heading level={1}>My Notes App! Welcome, {user.username}</Heading>
            <Button onClick={signOut} variation="outline">
              Sign out
            </Button>
          </div>
        </main>
      )}
    </Authenticator>
  );
};

export default App;