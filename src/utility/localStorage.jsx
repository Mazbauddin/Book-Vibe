import toast from "react-hot-toast";
export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("book-read")) || [];

  const existedData = savedData.find((item) => item.id == data.id);
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem("book-read", JSON.stringify(savedData));
    return toast.success("Read Successfully!");
  } else {
    toast.error("Already Read a Book!");
  }
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("book-read")) || [];

  return data;
};
// Wishlist

export const saveToLocalStorageWish = (data) => {
  const savedData = JSON.parse(localStorage.getItem("book-W")) || [];

  const existedData = savedData.find((item) => item.id == data.id);
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem("book-W", JSON.stringify(savedData));
    return toast.success("Wishlist Successfully Added!");
  } else {
    toast.error("Wishlist Already Add!");
  }
};

export const getFromLocalStorageWish = () => {
  const data = JSON.parse(localStorage.getItem("book-W")) || [];

  return data;
};
