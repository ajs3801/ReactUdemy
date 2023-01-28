import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { 
  auth,
  signInWithGooglePopUp, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) { // response is not null
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const LogGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={LogGoogleUser}>
        Sign in with Google Pop up
      </button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;