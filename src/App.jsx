import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Header } from "./components/Header/Header"

function App() {
  return (
    <div className = "App">
    <Header/>
      <div className="container">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/character/:characterId" element = {<Character/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
