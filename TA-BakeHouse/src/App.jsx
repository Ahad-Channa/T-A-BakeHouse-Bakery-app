// 📁 src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// User Layout & Pages
import Layout from "./pages/User/Layout";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Cart from "./pages/User/Cart";
import Register from "./pages/User/Register";
import ClientProducts from "./pages/User/cliendproduct";

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

const router = createBrowserRouter([
  // 👤 User Routes
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <ClientProducts /> },
      { path: "cart", element: <Cart /> },
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
