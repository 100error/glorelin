import {Routes, Route} from "react-router"
import HomePage from "../pages/HomePage"
import Products from "../pages/Products"
import About from "../pages/About"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Recipes from "../pages/Recipes"
import Layout from "../Layout/Layout"

function Router() {
  return (
    <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Longin" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Recipes" element={<Recipes/>}/>
        </Route>
    </Routes>
  )
}

export default Router
