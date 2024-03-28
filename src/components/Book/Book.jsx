/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Book = ({ item, loading }) => {
  const { image, id, bookName, author, category, rating, tags } = item || {};
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <Link to={`/book-details/${id}`}>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 h-full gap-8">
        <div className="bg-[#F3F3F3] px-10 py-10 rounded-lg">
          <img
            src={image}
            alt=""
            className="flex-grow h-[350px] mb-4 dark:bg-gray-500 rounded-lg mx-auto bg-cover  bg-no-repeat bg-center"
          />
        </div>
        <div>
          <div className="flex justify-between">
            {tags.map((tag) => (
              <a
                key={tag}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 text-[#23BE0A]"
              >
                {tag}
              </a>
            ))}
          </div>
          <h2 className="mb-1 text-2xl font-bold"> {bookName}</h2>
          <p className="text-sm dark:text-gray-600">By: {author}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">{category}</div>

          <div className="flex space-x-2 text-sm dark:text-gray-600 items-center">
            {rating}
            <FaRegStar className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
