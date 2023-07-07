import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  // const [books, setBooks] = useState([
  //   { title: "name of the wind", author: "patrick routhfus", id: 1 },
  //   { title: "the final empire", author: "brandon samderson", id: 2 }
  // ]);
  const [books, setBooks] = useState(() => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  const addBook = (title, author) => {
    setBooks([
      ...books,
      {
        title: title,
        author: author,
        id: Math.random()
      }
    ]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
export default BookContextProvider;
