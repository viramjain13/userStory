import { Card, Typography } from "@material-ui/core";
import React from "react";

export type BookProp = {
  name: string;
  author: string;
  img: string;
  id:number;
};
 const BookCard = (prop: BookProp) => {
  const { name, author, img } = prop;
  return (
    <Card>
      <img src={img} alt="" />
      <Typography>{name}</Typography>
      <Typography>{author}</Typography>
    </Card>
  );
};
export default BookCard;