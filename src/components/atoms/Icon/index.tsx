import { Icon } from '@material-ui/core'
import React from 'react'

export type IconProp={
    image:string
    styles?:Object
}
function index(props:IconProp) {
    const { image, styles } = props
    return (
        <Icon   >
            <img src={image} alt=""/>
        </Icon>
    )
}

export default index
