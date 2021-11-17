import { Icon } from '@material-ui/core'
import React from 'react'

export type IconProps={
    image:string
    
}
function index( props:IconProps){
    const { image } = props
    return (
    <Icon>
        <img src={image} alt=""/>
    </Icon>
    )
}

export default index;
