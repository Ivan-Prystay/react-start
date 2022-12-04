export const books = [
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" },
  { name: "Redux in depth" },
];

export const BookList = ({ books }) => (
  <ul>
    {books.map((book, index) => (
      <li key={index}>{book.name}</li>
    ))}
  </ul>
);
