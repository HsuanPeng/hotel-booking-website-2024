import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home/Home";
import Error from "./pages/Error";
import Products from "./pages/products/Products";
import SignIn from "./pages/signIn/SignIn";
import Ui from "./pages/Ui";
import RootLayout from "./pages/Root";
import ThemeProvider from "./theme/ThemeProvider";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "signup",
        element: <SignIn />,
      },
      {
        path: "signin",
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
