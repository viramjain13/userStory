import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BookCard, { BookProps } from "../../molecules/BookCard";

export const MyLibrary: React.FC = () => {
  const [bookList, setBookList] = useState<BookProps[]>([]);
  useEffect(() => {
     setBookList(bookList); 
  }, []);

  let books=bookList.length>0?bookList.map(book =>{
    <Grid item xs={4}>
    <div>
      <BookCard
        
        key={book.id}
        id={book.id}
        name={book.name}
        author={book.author}
        time={book.time}
        img={book.img}
      />
    </div>
  </Grid>
  }):<></>;
  return <Grid container>
{books}
  </Grid>;
};
