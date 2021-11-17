import React, { useEffect, useState } from "react";
import HomeSearch from "../../molecules/SearchBar/index";
import BookCard from "../../molecules/BookCard/index";
import { Grid } from "@material-ui/core";
import { BookProp } from "../../molecules/BookCard";

export default function CategoryBooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookList, setBookList] = useState<BookProp[]>([]);

  useEffect(() => {
    setBookList([]);
  }, []);
  return (
    <div>
      <div>
        <HomeSearch
          onChange={(event: any) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div>
          {bookList
            .filter((book: BookProp) => {
              if (searchTerm === "") {
                return book;
              } else if (
                book.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return book;
              } else if (
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return book;
              }
            })
            .map((book: BookProp) => {
              return (
                <Grid item xs={4}>
                  <div>
                    <BookCard
                      id={book.id}
                      key={book.id}
                      name={book.name}
                      author={book.author}
                      img={book.img}
                    />
                  </div>
                </Grid>
              );
            })}
        </div>
      </div>
    </div>
  );
}
