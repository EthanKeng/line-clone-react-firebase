import React from 'react'
import { Button } from "@mui/material"
import {auth} from "../firebase.js"


function SignOut() {
  return (
        <Button onClick={()=>auth.signOut()}>
    <div className='header'>
            <p>{auth.currentUser.displayName}</p>
            SignOut
    </div>
        </Button>
  )
}

export default SignOut