import React from "react";
import firebase from '../firebase'

function GoogleSignIn() {
    const auth = firebase.auth()
    const signInwithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)

    }

  return (
    <div>
        <button onClick = {signInwithGoogle} >Sign in with Google</button>
     
    </div>
  );
}

export default GoogleSignIn;
