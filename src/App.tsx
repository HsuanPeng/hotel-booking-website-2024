import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Ui from "./pages/Ui";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "ui",
        element: <Ui />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
