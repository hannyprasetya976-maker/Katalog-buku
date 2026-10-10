import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Catalog from "./pages/Catalog";
import BookDetail from "./pages/BookDetail";
import Borrowed from "./pages/Borrowed";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import ManageBooks from "./pages/adminpages/ManageBooks";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalog />} />
        <Route path="buku/:id" element={<BookDetail />} />
        <Route path="dipinjam" element={<Borrowed />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="buku" element={<ManageBooks />} />
      </Route>
    </Routes>
  );
}