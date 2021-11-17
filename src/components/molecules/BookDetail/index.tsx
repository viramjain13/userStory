import { Typography } from '@material-ui/core';
import React from 'react'
import Icon from '../../atoms/Icon';

export type BookDetailProp={
name: string
description: string
time:string
audio: string


}

 const BookDetail: React.FC<BookDetailProp>= (prop) => {
     const {name, description, time,audio}= prop;
    return (
        <div>
            <Typography>{name}</Typography>
            <Typography>{description}</Typography>
            <Icon image={"timeIcon"} /><Typography>{time}</Typography>
            <Icon image={"audioIcon"} /><Typography>{audio}</Typography>
        </div>
    )
}

export default  BookDetail