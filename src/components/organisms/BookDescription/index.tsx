import { Grid, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BookThumbNail from "../../atoms/BookThumbNail";
import ButtonComponent from "../../atoms/Button";
import BookDetail, { BookDetailProp } from "../../molecules/BookDetail";
import { TabComponent, TabData } from "../Tab";

const BookDescription: React.FC = () => {
  const [bookDetail, setBookDetail] = useState<BookDetailProp>();
  const [tabDetails, setTabDetail] = useState<TabData[]>([]);

  useEffect(() => {
    setBookDetail({});
    setTabDetail([]);
  }, []);
  return (
    <Grid container>
      <Grid item>
        <BookDetail
          name={bookDetail.name}
          description={bookDetail.description}
          time={bookDetail.time}
          audio={bookDetail.audio}
        />
        <ButtonComponent title={""} />
        <ButtonComponent title={""} />
        <Typography></Typography>
        <IconButton />
        <TabComponent tabData={tabDetails} />
      </Grid>
      <Grid item>
        <BookThumbNail image={""} />
      </Grid>
    </Grid>
  );
};
export default BookDescription;
