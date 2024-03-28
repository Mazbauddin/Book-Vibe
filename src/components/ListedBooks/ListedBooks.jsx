import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
import ReadMore from "../ReadMore/ReadMore";
import Spinner from "../Spinner/Spinner";

const ListedBooks = () => {
  const { localData, loading } = useLocalStorage();
  console.log(localData);

  const [tabIndex, setTabIndex] = useState(0);
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl text-center my-20 font-bold">Books</h2>
      {/* sort start */}
      <div className="flex justify-between items-center">
        <details className="dropdown mb-20 text-center">
          <summary className="m-1 btn">Sort</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* sort end */}
      {/* tabs start */}
      <div className="flex mb-10 items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to={"read"}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={"Wishlist"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      {/* read card */}
      {localData.map((data) => (
        <ReadMore key={data.id} data={data}></ReadMore>
      ))}
      <Outlet></Outlet>
      {/* tabs end */}
    </div>
  );
};

export default ListedBooks;
