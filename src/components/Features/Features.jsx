const Features = () => {
  return (
    <div className="">
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://i.ibb.co/ZdqKF7q/bookSelf.jpg"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2 text-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl text-white"
              >
                We Work to New Features Add <br />
                <span className="text-black text-6xl">Coming Soon</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
