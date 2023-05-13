import {Routes,Route,Link} from "react-router-dom"
import { Menu } from "./components/menu"
import { Cart } from "./components/cart"
import { Home } from "./components/home"
import { CartContext } from "./context/addToCartContext"
import { useContext } from "react"
import "./onlineFoodApp.css"

export const LandingPage = () =>{
const {cartList} = useContext(CartContext)
    return <>
    <nav className="nav">
    <Link  className="nav-link" to="/">Home</Link>
    <Link  className="nav-link"to="/menu">Menu</Link>
    <Link  className="nav-link" to="/cart">Cart<div className="cartCounter">{cartList.length}</div></Link>
    </nav>
    <Routes>
    <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
}