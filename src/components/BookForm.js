import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContexts";

function BookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setAuthor("");
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <input type="submit" value="add Book" />
    </form>
  );
}
export default BookForm;
