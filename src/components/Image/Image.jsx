import React, {useState, useContext, useEffect} from "react"
import PropTypes from 'prop-types';
import {Context} from '../../Context'

function Image({className, img}) {
    // console.log(img)
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, cartItems, addItemToCart, removeItemFromCart} = useContext(Context)

    function heartIcon(){
        return img.isFavorite ? <i onClick={()=> toggleFavorite(img.id)} className={`ri-heart-fill favorite`}></i>
        : hovered && <i onClick={()=> toggleFavorite(img.id)} className={`ri-heart-line favorite`}></i>
    }  
        
    
    function cartIcon(){
        if(cartItems.some(e=>{
            return e.id === img.id
        })){
            return <i onClick={()=> removeItemFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if(hovered){
            return <i onClick={()=> addItemToCart(img)} className="ri-add-circle-line cart"></i>
        } else {
            return;
        }
    }

    return (
        <div className={`${className} image-container`}
            onMouseEnter={()=> setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}


Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
      }),
    className:PropTypes.string
};

export default Image

