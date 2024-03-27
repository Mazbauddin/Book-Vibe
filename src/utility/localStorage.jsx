import toast from "react-hot-toast";
export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("book-read")) || [];

  const existedData = savedData.find((item) => item.id == data.id);
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem("book-read", JSON.stringify(savedData));
    return toast.success("Read Successfully!");
  } else {
    toast.error("Already Read!");
  }
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("book-read")) || [];
  console.log("local", data);
  return data;
};

// // save
// export const saveBook = (book) => {
//   let books = getBooks();
//   const isExist = books.find((b) => b.id === book.id);
//   if (isExist) {
//     return toast.error("Already Read!");
//   }
//   books.push(book);
//   localStorage.setItem("books", JSON.stringify(books));
//   toast.success("Read Successfully!");
// };

// delete
// export const deleteBlog = id => {
//   let blogs = getBlogs()
//   const remaining = blogs.filter(b => b.id !== id)
//   localStorage.setItem('blogs', JSON.stringify(remaining))
//   toast.success('Blog Removed from Bookmark!')
// }
