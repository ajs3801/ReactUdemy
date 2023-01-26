import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const LogGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={LogGoogleUser}>
        Sign in with Google Pop up
      </button>
    </div>
  );
};

export default SignIn;