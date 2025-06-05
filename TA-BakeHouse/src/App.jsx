import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Layout from  "./pages/User/Layout";
import Home from    "./pages/User/Home";
import Login from   "./pages/User/Login";
import Products from"./pages/User/Products";
import Cart from    "./pages/User/Cart";
import Register from "./pages/User/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/products", element: <Products /> },
      { path: "/cart", element: <Cart /> },
      {path: '/Register', element: <Register />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
