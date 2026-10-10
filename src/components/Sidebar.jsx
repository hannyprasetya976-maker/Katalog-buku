import { NavLink } from "react-router-dom";

export default function Sidebar({ open }) {
  const linkClass = ({ isActive }) =>
    `p-2 rounded hover:bg-gray-200 ${isActive ? "bg-gray-200 font-semibold" : ""}`;

  return (
    <aside className={`${open ? "block" : "hidden"} md:block w-64 bg-white shadow-md`}>
      <div className="p-4 font-bold text-xl">📚 Admin Perpus</div>
      <nav className="flex flex-col p-4 space-y-2">
        <NavLink to="/admin" end className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/buku" className={linkClass}>
          Kelola Buku
        </NavLink>
        <NavLink to="/" className="p-2 rounded hover:bg-gray-200 text-blue-600">
          ← Ke Katalog
        </NavLink>
      </nav>
    </aside>
  );
}