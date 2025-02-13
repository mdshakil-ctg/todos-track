import {getAuth} from "firebase/auth"
import app from "./Firebase/firebase.config"
function App() {
  const auth = getAuth(app)
console.log(auth)
  return (
    <>
     Todos & Track
    </>
  )
}

export default App
