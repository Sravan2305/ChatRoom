import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

import {useCollectionData} from 'react-firebase-hooks/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyCcm9JuJySt0ijMTWiF4vxiKKvKIUZhICA",
        authDomain: "chatroom-54ae1.firebaseapp.com",
        projectId: "chatroom-54ae1",
        storageBucket: "chatroom-54ae1.appspot.com",
        messagingSenderId: "790118118162",
        appId: "1:790118118162:web:bae12eb98a3a754995f9cb",
        measurementId: "G-VPGR9DTLWG"
      };
    
    
    firebase.initializeApp(firebaseConfig)
    

    const firestore = firebase.firestore()

    
    export default firebase

