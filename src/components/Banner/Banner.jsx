import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="hero min-h-[80vh] bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src="https://i.ibb.co/QkJCQZz/silent-patient.png"
            className="max-w-sm h-[450px] rounded-lg shadow-2xl"
          />
          <div className="w-4/5 ">
            <h1 className="text-6xl w-4/5 font-bold">
              Books to freshen up your bookshelf
            </h1>
            <Link
              to="listed_books"
              className="btn bg-[#23BE0A] text-white hover:bg-transparent border-2  border-[#23BE0A] hover:text-[#23BE0A] hover:border-[#23BE0A] mt-16"
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
