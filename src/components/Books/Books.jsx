// New line

import Book from "../Book/Book";
import useBooksData from "../Hooks/useBooksData";

const Books = () => {
  const { data, loading } = useBooksData();

  return (
    <div className="container mx-auto mt-20">
      <div>
        <h1 className="text-5xl text-center font-bold">Books</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
        {data.map((item) => (
          <Book loading={loading} key={item.id} item={item}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
