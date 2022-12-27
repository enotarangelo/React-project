// eslint-disable-next-line no-unused-vars
import { createContext, useEffect, useReducer } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import { createAction } from '../utils/reducer/reducer.utils'; 

export const USER_ACTION_TYPES={
  SET_CURRENT_USER:'SET_CURRENT_USER',
};

const userReducer=(state, action)=>{
  const {type, payload}= action;
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER: 
    return{
      ...state,
      currentUser:payload,
    }
    case 'increment':
      return{
        ...state,
        value: state.value+1
      }
    default:
    throw new Error(`unhandled type${type} in userReducer`);
    
  }

}

const initial_state={
  currentUser:null,
}

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch]= useReducer(userReducer, initial_state)
  const setCurrentUser=(user)=>
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

  const value = {currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
