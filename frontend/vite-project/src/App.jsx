import { Routes,Route,useLocation} from "react-router"
import Navbar from './components/Navbar'
import Dashboard from "./routes/dashboard"
import ChooseState from "./routes/choose-state"
import Signup from "./pages/Signup"
import LegendsPage from "./pages/LegendsPage"
import AddStory from "./pages/add-story"
import Signin from "./pages/Signin"
import Games from "./pages/Game"

function App() {
  const location = useLocation();
  return (
    <>
    <div> 
      {location.pathname !== "/" && location.pathname !=="/signin" && <Navbar />}
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/choose-state" element={<ChooseState/>}></Route>
            <Route path="/legends/:stateName" element={<LegendsPage/>}></Route>
            <Route path="/add-story" element={<AddStory/>}></Route>
            <Route path="game" element={<Games/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
  
    </div>
      
    </>
  )
}

export default App
