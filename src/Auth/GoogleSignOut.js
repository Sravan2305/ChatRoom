import React from "react";
import firebase from "../firebase";

function GoogleSignOut() {
  const auth = firebase.auth();

  return (
    <div>
      {auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )}
    </div>
  );
}

export default GoogleSignOut;
