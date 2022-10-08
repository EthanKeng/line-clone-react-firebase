import React from 'react'
import { Button } from "@mui/material"
import firebase from "firebase/compat/app"
import {auth} from "../firebase.js"

function SiginIn() {
    function signInWIthGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  return (
    <div>SiginIn: 
        <Button onClick={signInWIthGoogle}> Login with Google </Button>
    </div>
  )
}

export default SiginIn