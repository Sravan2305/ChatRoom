import React from 'react'

function ChatMessage(props) {
    const {message , time , username, userphoto } = props.message
    console.log(props.message)
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default ChatMessage
