// New line

import Book from "../Book/Book";
import useBooksData from "../Hooks/useBooksData";

const Books = () => {
  const { data, loading } = useBooksData();

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-5xl text-center font-bold">Books</h1>{" "}
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item) => (
          <Book key={item.id} item={item}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
