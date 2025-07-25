//  src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Auth Context Guard
import PrivateRoute from "./routes/PrivateRoute";

// User Layout & Pages
import Layout from "./pages/components/Layout";
import Login from "./pages/components/Login";
import LandingPage from "./pages/components/LandingPage";
import Cart from "./pages/User/Cart";
import Register from "./pages/components/Register";
import ClientProducts from "./pages/User/clientproduct";


// Admin Layout & Pages
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboards from "./pages/Admin/Dashboards";
import Incoming_orders from "./pages/Admin/Incoming_orders";
import AdminCategories from "./pages/Admin/AdminCategories";
import AddCategory from "./pages/Admin/AddCategory";
import AdminProducts from "./pages/Admin/AdminProducts";
import Addproducts from "./pages/Admin/AddProduct";
import Prev_orders from "./pages/Admin/Prev_orders";
import OrderDetails from "./pages/Admin/OrderDetails";
import EditCategory from "./pages/Admin/EditCategory";
import EditProduct from "./pages/Admin/EditProduct";
import Welcome from "./pages/User/welcome";
import Checkout from "./pages/User/Checkout";
import  Client_Layout from "./pages/User/clientlayout"
import MyOrders from "./pages/User/MyOrders";

const router = createBrowserRouter([
  // Landing page
  {
  path: "/",
  element: <Layout />,
  children: [
    { path: "", element: <LandingPage /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },   
  ],
},


 // User Routes
  {
  path: "/user",
  element: < Client_Layout />,
  children: [
    { path: "", element: <PrivateRoute requiredRole="user"><Welcome /></PrivateRoute> },
    { path: "client-products", element: <PrivateRoute requiredRole="user"><ClientProducts /></PrivateRoute> },
    { path: "cart", element: <PrivateRoute requiredRole="user"><Cart /></PrivateRoute> },
    { path: "checkout" , element: <PrivateRoute requiredRole="user">< Checkout/></PrivateRoute> },
        { path: "my-order" , element: <PrivateRoute requiredRole="user">< MyOrders/></PrivateRoute> },

  ],
},



  //  Admin Routes
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
    { path: "order-details/:orderId", element: <PrivateRoute requiredRole="admin"><OrderDetails /></PrivateRoute> },
  ]
},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

