import React, {useContext} from "react"
import './Header.css'
import {NavLink} from 'react-router-dom'
import {Context} from '../../Context'

function Header() {
    const {cartItems} = useContext(Context)
    const shoppingCart = cartItems.length > 0 ? `ri-shopping-cart-fill` : 'ri-shopping-cart-line'


        return (
        <header>
            <NavLink to="/"><h2>Pic Some</h2></NavLink>
            <NavLink to="cart"><i className={`${shoppingCart} ri-fw ri-2x`}></i></NavLink>
        </header>
        
    )
}

export default Header
