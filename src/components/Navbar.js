import { useContext } from "react";
import { BookContext } from "../contexts/BookContexts";

function NavBar() {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1> Book Reading App</h1>
      <p> Currently you have {books.length} books </p>
    </div>
  );
}
export default NavBar;
