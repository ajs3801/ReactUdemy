import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss'

import { 
  signInWithGooglePopUp, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

// default form-fields
const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // useState 
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // reset the Form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields); // set the form fields to default form
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  // whenever submit button clicked
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // get response
      const { user } = await signInAuthUserWithEmailAndPassword(
        email, 
        password,
      );

      // reset the form fields
      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case'auth/wrong-password':
          alert("incorrect password for email");
          break;
        
        case 'auth/user-not-found':
          alert("no user associated with this email");
          break;

        default: // default statement
          console.log(error)
      }
    }
  };

  // whenever Email and Password fields changed, 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]:value })
  };

  // return templates
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email"required onChange={handleChange} name='email' value={email}/>

        <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType='google' onClick={signInWithGoogle}>GOogle sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;