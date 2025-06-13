// 📁 src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// User Layout & Pages
import Layout from "./pages/components/Layout";
import Home from "./pages/components/Home";
import Login from "./pages/components/Login";
import Cart from "./pages/User/Cart";
import Register from "./pages/components/Register";
import ClientProducts from "./pages/User/cliendproduct";
import ClientCategories from "./pages/User/ClientCategory";

// Admin Layout & Pages
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboards from "./pages/Admin/Dashboards";
import Incoming_orders from "./pages/Admin/Incoming_orders";
import AdminCategories from "./pages/Admin/AdminCategories";
import AddCategory from "./pages/Admin/AddCategory";
import AdminProducts from "./pages/Admin/AdminProducts";
import Addproducts from "./pages/Admin/AddProduct";
import Feedbacks from "./pages/Admin/Feedbacks";
import Prev_orders from "./pages/Admin/Prev_orders";
import OrderDetails from "./pages/Admin/OrderDetails";
import EditCategory from "./pages/Admin/EditCategory";
import EditProduct from "./pages/Admin/EditProduct";

import About from "./pages/components/About";
import Contactus from "./pages/components/Contactus";
import LandingPage  from "./pages/components/LandingPage";
import Products from "./pages/components/Products";
import Checkout from "./pages/User/Checkout";



const router = createBrowserRouter([
  // 👤 User Routes
  {
    path: "/",
    element: <Layout />,
    children: [
      {  index: true, element: <LandingPage />},
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "client-products", element: <ClientProducts /> },
      { path: "client-category", element: <ClientCategories/>},
      {path : "about" , element : <About/>},
      {path : "contact-us", element: <Contactus/>},
      {path: "checkout", element: <Checkout/>}
      
      
    ],
  },

  // 🛠️ Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Dashboards /> },
      { path: "admin-category", element: <AdminCategories /> },
      { path: "add-category", element: <AddCategory /> },
      { path: "admin-products", element: <AdminProducts /> },
      {path: "/admin/edit-category/:id", element: <EditCategory />},
      {path: "/admin/edit-product/:id", element: <EditProduct />},
      { path: "add-product", element: <Addproducts /> },
      { path: "incoming-orders", element: <Incoming_orders /> },
      { path: "previous-orders", element: <Prev_orders /> },
      { path: "feedbacks", element: <Feedbacks /> },
      { path: "order-details/:orderId", element: <OrderDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
