import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../components/Register";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Register />} />
  </Routes>
);

export default function AR() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
