import { Routes, Route } from "react-router-dom";
import { Home, ProductsList } from "../pages/index";
import { ProductDetails } from "../pages/ProductDetails";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { CartPage } from "../pages/Cart/CartPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { OrderPage } from "../pages/Order/OrderPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            {" "}
            <CartPage />{" "}
          </ProtectedRoute>
        }
      />

      <Route
        path="/order-summary"
        element={
          <ProtectedRoute>
            {" "}
            <OrderPage />{" "}
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
