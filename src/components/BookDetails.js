import { useContext } from "react";
import { BookContext } from "../contexts/BookContexts";

function BookDetails({ book }) {
  const { removeBook } = useContext(BookContext);

  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetails;
