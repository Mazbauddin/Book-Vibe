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
        <img className="w-[300px] h-[200px] rounded-md" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex justify-between">
          <div className="flex justify-between ">
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
          <p>Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className="flex justify-between">
          <p>Publisher: {publisher}</p>
          <p>Page {totalPages}</p>
        </div>
        <div className="card-actions flex justify-between">
          <p>Category: {category}</p>
          <p>Rating: {rating}</p>
          <Link to={`/book-details/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
