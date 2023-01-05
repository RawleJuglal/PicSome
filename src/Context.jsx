import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [photos, setPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function handleChange(newPhoto){
        setPhotos(prevPhotos=> [...prevPhotos, newPhoto])
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
        <Context.Provider value={{photos, handleChange}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}