import { createContext, useState, useEffect, useReducer } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null
};

// provider (component)
export const UserProvider = ({ children }) => {
  // [useState]
  // -> const [state, setState] = useState(initialState);
  //const [ currentUser, setCurrentUser ] = useState(null);
  const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  //  value contains currentUser and setCurrentUser
  const value = { currentUser, setCurrentUser };

  // why using useEffect..? ->
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // it returns the UserContext.Provider tag
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

