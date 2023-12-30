import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "components/Header";

// import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div>
      {/* <MainNavigation /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
