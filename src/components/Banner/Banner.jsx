import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-6xl w-4/5 font-bold">
              Books to freshen up your bookshelf
            </h1>
            <Link
              to="listed_books"
              className="btn bg-[#23BE0A] text-white hover:bg-transparent border-2 border-[#23BE0A] hover:text-[#23BE0A] hover:border-[#23BE0A] mt-10"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
