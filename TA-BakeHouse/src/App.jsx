// 📁 src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Auth Context Guard
import PrivateRoute from "./routes/PrivateRoute";

// User Layout & Pages
import Layout from "./pages/User/Layout";
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
import Welcome from "./pages/User/welcome";

const router = createBrowserRouter([
  // 👤 User Routes
  {
  path: "/",
  element: <Layout />,
  children: [
    { path: "", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "home", element: <PrivateRoute requiredRole="user"><Welcome /></PrivateRoute> },
    { path: "client-products", element: <PrivateRoute requiredRole="user"><ClientProducts /></PrivateRoute> },
    { path: "cart", element: <PrivateRoute requiredRole="user"><Cart /></PrivateRoute> },
  ],
},


  // 🛠️ Admin Routes
  {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { path: "", element: <PrivateRoute requiredRole="admin"><Dashboards /></PrivateRoute> },
    { path: "admin-category", element: <PrivateRoute requiredRole="admin"><AdminCategories /></PrivateRoute> },
    { path: "add-category", element: <PrivateRoute requiredRole="admin"><AddCategory /></PrivateRoute> },
    { path: "admin-products", element: <PrivateRoute requiredRole="admin"><AdminProducts /></PrivateRoute> },
    { path: "edit-category/:id", element: <PrivateRoute requiredRole="admin"><EditCategory /></PrivateRoute> },
    { path: "edit-product/:id", element: <PrivateRoute requiredRole="admin"><EditProduct /></PrivateRoute> },
    { path: "add-product", element: <PrivateRoute requiredRole="admin"><Addproducts /></PrivateRoute> },
    { path: "incoming-orders", element: <PrivateRoute requiredRole="admin"><Incoming_orders /></PrivateRoute> },
    { path: "previous-orders", element: <PrivateRoute requiredRole="admin"><Prev_orders /></PrivateRoute> },
    { path: "feedbacks", element: <PrivateRoute requiredRole="admin"><Feedbacks /></PrivateRoute> },
    { path: "order-details/:orderId", element: <PrivateRoute requiredRole="admin"><OrderDetails /></PrivateRoute> },
  ]
},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

