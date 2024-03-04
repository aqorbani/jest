import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../components/Register";
import Products from "../components/Products";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/products" element={<Products />} />
  </Routes>
);

export default function AR() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
