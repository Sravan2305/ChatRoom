import React from 'react'
import firebase from '../firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'

function ChatRoom() {
    const db = firebase.firestore()

    const messageRef = db.collection('messages')

    const query = messageRef.orderBy('createdAt').limit(25)
    const [messages]  = useCollectionData(query , {idField:'id'})
console.log(messages)


    return (
        <div>
             <p>shgdvchjxbmn</p>
            {
               
                messages && messages.map(msg => msg&&<ChatMessage key = {msg.id} message={msg} /> )
            }
        </div>
    )
}

export default ChatRoom
