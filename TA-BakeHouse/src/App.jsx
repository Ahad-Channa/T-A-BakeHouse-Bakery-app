// 📁 src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// User Layout & Pages
import Layout from "./pages/components/Layout";
import Home from "./pages/components/Home";
import Login from "./pages/components/Login";
import Cart from "./pages/User/Cart";
import Register from "./pages/components/Register";
import Clientproducts from "./pages/User/cliendproduct";
import ClientCategories from "./pages/User/ClientCategory";
import Welcome from "./pages/User/welcome";

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
import LandingPage from "./pages/components/LandingPage";
import Checkout from "./pages/User/Checkout";
import { Usermodule } from "./pages/User/Usermodule";
import Client_Navbar from "./pages/User/client_navbar";

const router = createBrowserRouter([
  //  landing page Routes
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      //{ path: "home", element: <Home /> },
      //{ path: "login", element: <Login /> },
      //{ path: "register", element: <Register /> },
      // { path: "products", element: <Products /> },

      { path: "about", element: <About /> },
      { path: "contact-us", element: <Contactus /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  {
    // User Routes

    path: "/user",
    element: <Usermodule />,
    children: [
      {
        index: true,
        element: (
          <>
          
            <section id="welcome">
              <Welcome />
            </section>
            <section id="client-category">
              <ClientCategories />
            </section>
            <section id="client-products">
              <Clientproducts />
            </section>
          </>
        ),
      },
      { path: "cart", element: <Cart /> },
      { path: "client-products", element: <Clientproducts /> },
      { path: "client-category", element: <ClientCategories /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },

  //  Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Dashboards /> },
      { path: "admin-category", element: <AdminCategories /> },
      { path: "add-category", element: <AddCategory /> },
      { path: "admin-products", element: <AdminProducts /> },
      { path: "edit-category/:id", element: <EditCategory /> },
      { path: "edit-product/:id", element: <EditProduct /> },
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
