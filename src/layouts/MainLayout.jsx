import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-6 max-w-6xl w-full mx-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2026 Katalog Buku Perpustakaan | Version 1.0</p>
      </footer>
    </div>
  );
}