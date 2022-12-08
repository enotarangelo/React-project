import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth
  } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';


    const SignIn = () => {
         /**   useEffect(() => {
            (async () => {
              const response = await getRedirectResult(auth);
              console.log(response)
              if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
              }
            })();
          }, []);
          }, []);*/

        const logGoogleUser=(async ()=>{
            //const { user } = await signInWithGooglePopup();
            const { user } = await signInWithGooglePopup();
            console.log(user)
            const userDocRef = await createUserDocumentFromAuth(user);
            
     })


        return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
           
        </div>
        );
  };
  
  export default SignIn;