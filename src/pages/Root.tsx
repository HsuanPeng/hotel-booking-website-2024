import { Outlet } from "react-router-dom";
import Header from "components/header/Header";

// import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div>
      {/* <MainNavigation /> */}
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
