import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home/Home";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadMore from "../components/ReadMore/ReadMore";
import Wishlist from "../components/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed_books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "read",
            element: <ReadMore></ReadMore>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/Pages_to_read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);
