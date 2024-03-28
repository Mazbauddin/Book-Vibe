import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="h-20">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-300px)]">
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
