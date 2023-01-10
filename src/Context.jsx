import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function toggleFavorite(id){
        const updatedArr = photos.map(photo => {
            // console.log(id)
            // console.log(!photo.isFavorite)
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setPhotos(updatedArr)
    }

    function addItemToCart(img){
        setCartItems(prevCart=> {
            return [...prevCart, img]
        })
    }

    useEffect(()=>{
        if(isLoading){
            fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
                .then(res=> res.json())
                .then(data=> {
                    // console.log(data)
                    setPhotos(data)
                    return true
                })
                .then(fin=> {
                    setIsLoading(false)
                })
        }
    }, [])

    return (
        <Context.Provider value={{photos, cartItems, toggleFavorite, addItemToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}