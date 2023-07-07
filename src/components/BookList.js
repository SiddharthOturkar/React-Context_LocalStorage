import { useContext } from "react";
import { BookContext } from "../contexts/BookContexts";
import BookDetails from "./BookDetails";

function BookList() {
  // const storageItems = JSON.parse(localStorage.getItem("books"));
  // console.log(storageItems);
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to Read</div>
  );
}

export default BookList;
