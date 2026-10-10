import { Link, useParams } from "react-router-dom";
import { useBorrow } from "../context/BorrowContext";
import { useBooks } from "../context/BookContext";

export default function BookDetail() {
  const { id } = useParams();
  const { borrowed, pinjam } = useBorrow();
  const { books } = useBooks();

  const buku = books.find((b) => b.id === Number(id));

  // Conditional Rendering: buku tidak ada
  if (!buku) {
    return (
      <div>
        <p className="text-red-500 mb-4">Buku tidak ditemukan.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Kembali ke katalog
        </Link>
      </div>
    );
  }

  const sudahDipinjam = borrowed.some((b) => b.id === buku.id);

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
      <Link to="/" className="text-blue-600 hover:underline text-sm">
        ← Kembali ke katalog
      </Link>
      <span className="block text-xs text-blue-600 font-semibold mt-4">
        {buku.kategori}
      </span>
      <h1 className="text-2xl font-bold mt-1">{buku.judul}</h1>
      <p className="text-gray-600">{buku.penulis}</p>
      <p className="mt-4 text-gray-700">{buku.deskripsi}</p>
      <p className="mt-4 text-sm">Stok: {buku.stok}</p>

      <div className="mt-6">
        {buku.stok === 0 ? (
          <span className="text-red-500 font-semibold">Stok habis</span>
        ) : sudahDipinjam ? (
          <span className="text-green-600 font-semibold">Sudah kamu pinjam ✓</span>
        ) : (
          <button
            onClick={() => pinjam(buku)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Pinjam Buku
          </button>
        )}
      </div>
    </div>
  );
}