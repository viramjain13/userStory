import { type } from 'os'
import React from 'react'

export type BookThumb={
image: string
}
const BookThumbNail:React.FC<BookThumb> = (prop) => {
   const {image} = prop
    return (
        <div>
                <img src={image} alt=""/>
        </div>
    )
}
export default BookThumbNail