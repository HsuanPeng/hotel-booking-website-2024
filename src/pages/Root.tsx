import { Outlet } from "react-router-dom";
import Footer from "./home/components/Footer";

// import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div>
      {/* <MainNavigation /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
