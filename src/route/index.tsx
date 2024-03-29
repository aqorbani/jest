import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Products from "../components/Products";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/products" element={<Products />} />
  </Routes>
);

function AR() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default AR;
