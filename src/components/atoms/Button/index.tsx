import { Button } from "@material-ui/core";
import React from "react";


export type ButtonProp = {
  title: string;
  startIcon?: string;
  onClick?: any;
};
const ButtonComponent: React.FC<ButtonProp> = (prop) => {
  const { title, startIcon, onClick } = prop;
  return <Button title={title} startIcon={startIcon} onClick={onClick} />;
};
export default ButtonComponent;
