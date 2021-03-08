import './App.css'
import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import firebase from './firebase'
import ChatRoom from './Components/ChatRoom'
import SignIn from './Components/SignIn'



function App() {
  const auth = firebase.auth()
  const [user] = useAuthState(auth)
  console.log(user)
  function SignOut(){
    return auth.currentUser && (<button onClick = {()=>auth.signOut()} >Sign Out</button>)
}
const clickHandler = async() =>{
  const db = firebase.firestore()

  const messageRef = db.collection('messages')
  console.log(msgValue.current.value)
await messageRef.add({
  message: msgValue.current.value,
  createdAt : new Date()
})
}
var msgValue = React.useRef('');
console.log("msgValue", msgValue.current)
  return (
    <div >
       {user ? <ChatRoom/> : <SignIn/>}
       <SignOut />
       <input type = "text" ref={msgValue} />
       <button onClick={clickHandler}>me</button>
    </div>
  );
}

export default App;
