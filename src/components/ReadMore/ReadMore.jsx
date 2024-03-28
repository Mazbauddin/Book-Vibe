/* eslint-disable react/prop-types */
// import useLocalStorage from "../Hooks/useLocalStorage";

import { Link } from "react-router-dom";

const ReadMore = ({ data }) => {
  const {
    id,
    bookName,
    author,
    category,
    rating,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    image,
  } = data || {};
  return (
    <div className="card p-6 mb-5 lg:card-side bg-red-500 max-w-6xl shadow-xl">
      <figure>
        <img
          className="flex-grow h-[250px] mb-4 dark:bg-gray-500 rounded-lg mx-auto bg-cover  bg-no-repeat bg-center"
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
          <div className="flex justify-between col-span-1 ">
            {tags.map((tag) => (
              <a
                key={tag}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1"
              >
                #{tag}
              </a>
            ))}
          </div>
          {/* <p>Tag #{tags}</p> */}
          <p className="col-span-1">Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-between">
          <p className="col-span-1">Publisher: {publisher}</p>
          <p className="col-span-1">Page {totalPages}</p>
        </div>
        <div className="card-actions grid grid-cols-3 justify-between">
          <button className="btn col-span-1 btn-outline btn-info">
            Category: {category}
          </button>
          <button className="btn col-span-1 btn-outline btn-warning">
            Rating: {rating}
          </button>
          <Link
            to={`/book-details/${id}`}
            className="btn col-span-1 bg-[#23BE0A] text-white hover:bg-transparent border-2 border-[#23BE0A] hover:text-[#23BE0A] hover:border-[#23BE0A] mr-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
