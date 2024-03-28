import { useParams } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../utility/localStorage";
import Spinner from "../Spinner/Spinner";

const BookDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = useBooksData();

  const handleRead = () => {
    saveToLocalStorage(singleData);
  };

  useEffect(() => {
    if (data) {
      const singleData = data.find((item) => item.id === +id);

      setSingleData(singleData);
    }
  }, [data, id]);
  const {
    bookName,
    author,
    category,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    image,
  } = singleData || {};

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                {bookName}
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">By: {author}</p>
              <div className="mt-12 space-y-12">
                <p>{category}</p>
                <p className="font-bold">
                  Review:<span className="font-normal"> {review}</span>
                </p>

                <p className="flex justify-between">Tags: {tags}</p>
                <p>Number of Pages: {totalPages}</p>
                <p>Publisher: {publisher}</p>
                <p>Year of Publishing: {yearOfPublishing}</p>
                <p>Rating: {rating}</p>
              </div>
              {/* button start */}
              <div>
                <a
                  onClick={handleRead}
                  className="btn bg-[#23BE0A] text-white hover:bg-transparent border-2 border-[#23BE0A] hover:text-[#23BE0A] hover:border-[#23BE0A] mr-4"
                >
                  Read
                </a>
                <a className="btn bg-[#59C6D2] text-white hover:bg-transparent border-2 border-[#59C6D2] hover:text-[#59C6D2] hover:border-[#59C6D2]">
                  Wishlist
                </a>
              </div>
              {/* button end */}
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src={image}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
