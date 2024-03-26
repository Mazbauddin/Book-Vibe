import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  //   const { bookName, author, category, rating, tags } = bookDetails;
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  console.log(book);

  const handleRead = () => {
    toast("You read a book");
  };
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                {book.bookName}
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                By: {book.author}
              </p>
              <div className="mt-12 space-y-12">
                <p>{book.category}</p>
                <p>
                  <span className="font-bold">Review:</span> {book.review}
                </p>
                <p>Tags: {book.tags}</p>
                <p>Number of Pages: {book.totalPages}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Year of Publishing: {book.yearOfPublishing}</p>
                <p>Rating: {book.rating}</p>
              </div>
              {/* button start */}
              <div>
                <a className="btn bg-[#23BE0A] text-white hover:bg-transparent border-2 border-[#23BE0A] hover:text-[#23BE0A] hover:border-[#23BE0A] mr-4">
                  Read
                </a>
                <a
                  onClick={handleRead}
                  className="btn bg-[#59C6D2] text-white hover:bg-transparent border-2 border-[#59C6D2] hover:text-[#59C6D2] hover:border-[#59C6D2]"
                >
                  Wishlist
                </a>
              </div>
              {/* button end */}
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src="https://source.unsplash.com/random/361x481"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default BookDetails;
