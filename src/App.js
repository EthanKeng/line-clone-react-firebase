import './App.css';
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./firebase.js"
import SiginIn from './components/SiginIn';
import Line from './components/Line';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? <Line /> : <SiginIn />}
    </div>
  );
}

export default App;
