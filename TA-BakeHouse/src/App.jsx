import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Layout from "./pages/User/Layout";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
//import Products from "./pages/User/Products";
import Cart from "./pages/User/Cart";
import Register from "./pages/User/Register";
import Dashboards from "./pages/Admin/Dashboards";
import Incoming_orders from "./pages/Admin/Incoming_orders";
import AdminCategories from "./pages/Admin/AdminCategories";
import  AddCategory  from "./pages/Admin/AddCategory";
//import AdminProducts from "./pages/Admin/AdminProducts";
import Feedbacks from "./pages/Admin/Feedbacks";
import Prev_orders from "./pages/Admin/Prev_orders";
import OrderDetails from "./pages/Admin/OrderDetails";
import Products from "./pages/components/Products";
import AdminProducts from "./pages/Admin/adminproduct";
import ClientProducts from "./pages/User/cliendproduct";
import  Addproducts  from "./pages/Admin/Addproducts";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/products", element: <Products /> },
      { path: "/cart", element: <Cart /> },
      { path: "/Register", element: <Register /> },
      { path: "/dashboard", element: <Dashboards /> },
      { path: "/admin-category", element: <AdminCategories /> },
      { path: "/add-category", element: <AddCategory />},
      { path: "/admin-products", element: <AdminProducts /> },
      { path: "/incoming-orders", element: <Incoming_orders /> },
      { path: "/feedbacks", element: <Feedbacks /> },
      { path: "/previous-orders", element: <Prev_orders /> },
      { path: "/add-category", element: <AddCategory /> },
      { path: "/order-details/:orderId", element: <OrderDetails /> },
      { path: "/client-products", element: <ClientProducts/>},
      { path: "/add-product", element: <Addproducts/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
