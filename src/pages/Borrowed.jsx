import { Link } from "react-router-dom";
import { useBorrow } from "../context/BorrowContext";

export default function Borrowed() {
  const { borrowed, kembalikan } = useBorrow();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Pinjaman</h1>

      {/* Conditional Rendering: kosong vs berisi */}
      {borrowed.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 mb-2">Kamu belum meminjam buku apa pun.</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Lihat katalog
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {borrowed.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{b.judul}</h2>
                <p className="text-sm text-gray-600">{b.penulis}</p>
              </div>
              <button
                onClick={() => kembalikan(b.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Kembalikan
              </button>
            </div>
          ))}
          <p className="text-sm text-gray-600 pt-2">
            Total buku dipinjam: <strong>{borrowed.length}</strong>
          </p>
        </div>
      )}
    </div>
  );
}