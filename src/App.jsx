import {getAuth} from "firebase/auth"
import app from "./services/firebase.config"
function App() {
  const auth = getAuth(app)
console.log(auth)
  return (
    <>
     Todos & Track Application
    </>
  )
}

export default App
