import Counter from "./components/Counter/Counter";
import { BookList, books } from "./components/BookList/BookList";

export default function App() {
  return (
    <div>
      <Counter />
      <BookList books={books} />
    </div>
  );
}
