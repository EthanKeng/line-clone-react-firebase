import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyjiRDMFzRizzactdDpgbHUe9I6ykijlE",
  authDomain: "line-clone-react-firebase.firebaseapp.com",
  projectId: "line-clone-react-firebase",
  storageBucket: "line-clone-react-firebase.appspot.com",
  messagingSenderId: "108088268528",
  appId: "1:108088268528:web:a49717cd344283c28c5435"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = firebase.auth()

export {
    db,auth
}