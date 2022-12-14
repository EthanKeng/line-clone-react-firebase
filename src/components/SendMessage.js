import React, { useState } from 'react'
import {db, auth} from "../firebase.js"
import { Input } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

import firebase from "firebase/compat/app"

function SendMessage() {
    const [message, setMessage] = useState("")
    const { uid, photoURL} = auth.currentUser
    function sendMessage(e){
        e.preventDefault()
        db.collection("messages").add({
            text: message, 
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),

        })
        setMessage("")
    }
    return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'></div>
            <Input placeholder='Enter your message'
             type="text" onChange={(e)=>setMessage(e.target.value)}
             value={message}
             />
             <button>
                 <SendIcon/>
            </button>  
        </form>
    </div>
  )
}

export default SendMessage