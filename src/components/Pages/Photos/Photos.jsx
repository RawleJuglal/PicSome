import React, {useContext} from "react"
import {Context} from '../../../Context'
import Image from '../../Image/Image'
import {getClass} from '../../../utils/index'
import {nanoid} from 'nanoid'

// Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

function Photos() {
    const {photos} = useContext(Context)

    const imageElements = photos.map((img, i)=>{
        return <Image key={img.id} img={img} className={getClass(i)}/>
    })
    return (
        <main className="photos">
            {imageElements}
        </main>
        
    )
}

export default Photos