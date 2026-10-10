import { Link, NavLink } from "react-router-dom";
import { useBorrow } from "../context/BorrowContext";

export default function Navbar() {
  const { borrowed } = useBorrow();

  const linkClass = ({ isActive }) =>
    `hover:text-gray-200 ${isActive ? "underline font-semibold" : ""}`;

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        📚 Katalog Buku
      </Link>
      <div className="flex gap-6 items-center">
        <NavLink to="/" end className={linkClass}>
          Katalog
        </NavLink>
        <NavLink to="/dipinjam" className={linkClass}>
          Pinjaman
          {/* Conditional Rendering: badge hanya tampil jika ada pinjaman */}
          {borrowed.length > 0 && (
            <span className="ml-2 bg-white text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {borrowed.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}