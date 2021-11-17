import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import BookThumbNail from "../../atoms/BookThumbNail";
import ButtonComponent from "../../atoms/Button";
import { TabComponent } from "../Tab";

export const BookDescription = () => {
    
  return (
    <Grid container>
      <Grid item>
        <BookDescription />
        <ButtonComponent title={""} />
        <ButtonComponent title={""} />
        <Typography></Typography>
        <IconButton />
        <TabComponent />
      </Grid>
      <Grid item>
        <BookThumbNail image={""} />
      </Grid>

    </Grid>
  );
};
