import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Error from "./pages/Error";
import Products from "./pages/products/Products";
import SignIn from "./pages/signIn/SignIn";
import Ui from "./pages/Ui";
import RootLayout from "./pages/Root";
import ThemeProvider from "./theme/ThemeProvider";

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
        path: "signUp",
        element: <SignIn />,
      },
      {
        path: "signIn",
        element: <SignIn />,
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
