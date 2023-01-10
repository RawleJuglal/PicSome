import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../../Context'
import useHover from '../../hooks/useHover'

function CartItem({item}){
    const [hovered, ref] = useHover()
    const {cartItems, removeItemFromCart} = useContext(Context)
    // const [hovered, setHovered] = useState(false)

    const trashIcon = hovered ? `ri-delete-bin-fill` : `ri-delete-bin-line`
    
    return(
        <div className="cart-item">
            <i onClick={()=> removeItemFromCart(item.id)} 
                ref={ref}
                className={trashIcon}>
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item:PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem