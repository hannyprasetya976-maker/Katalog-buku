import { useBooks } from "../../context/BookContext";
import { useBorrow } from "../../context/BorrowContext";

export default function AdminDashboard() {
  const { books } = useBooks();
  const { borrowed } = useBorrow();

  const totalStok = books.reduce((sum, b) => sum + b.stok, 0);
  const stokHabis = books.filter((b) => b.stok === 0).length;

  const kartu = [
    { label: "Total Judul", nilai: books.length },
    { label: "Total Stok", nilai: totalStok },
    { label: "Stok Habis", nilai: stokHabis },
    { label: "Sedang Dipinjam", nilai: borrowed.length },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kartu.map((k) => (
          <div key={k.label} className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">{k.label}</p>
            <p className="text-3xl font-bold text-blue-600">{k.nilai}</p>
          </div>
        ))}
      </div>
    </div>
  );
}