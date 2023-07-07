import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import NavBar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContexts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}
