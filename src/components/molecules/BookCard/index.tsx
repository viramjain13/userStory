import { Card, Typography} from "@material-ui/core";
import React from "react";
import Icon from "../../atoms/Icon";



export type BookProps={
  name:string;
  author:string;
  time:string;
  img:string;
  id:number;
  onClick?:any


}
const index:React.FC<BookProps>=(props)=> {
  const {name,author,time,img} = props;
  return (
    <Card>
      

      <img  alt=""/>
      <Typography title={name}/>
      <Typography title={author} />
      <Icon  image={img}/>
      <Typography title={time}/>
    </Card>
  );
}

export default index;
