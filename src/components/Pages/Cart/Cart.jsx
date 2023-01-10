import React, {useContext, useState} from "react"
import {Context} from '../../../Context'
import CartItem from '../../CartItem/CartItem'

function Cart() {
    const {cartItems, removeAllItemsFromCart} = useContext(Context)
    const [buttonText, setButtonText] = useState('Place Order')
    const cartItemElements = cartItems.map(item=>{
        return <CartItem key={item.id} item={item} />
    })
    const cartTotal = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder(){
        setButtonText("Ordering")
        setTimeout(()=>{
            console.log('order placed') 
            setButtonText("Place Order")
            removeAllItemsFromCart()             
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {cartTotal} </p>
            { cartItems.length > 0 && 
                <div className="order-button">
                    <button disabled={buttonText === "Ordering"} onClick={placeOrder}>{buttonText}</button>
                </div>
            }
        </main>
    )
}

export default Cart