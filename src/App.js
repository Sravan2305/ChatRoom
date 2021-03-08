import './App.css'
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

  return (
    <div >
       {user ? <ChatRoom/> : <SignIn/>}
       <SignOut />
    </div>
  );
}

export default App;
