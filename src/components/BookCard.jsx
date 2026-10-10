import { Link } from "react-router-dom";

export default function BookCard({ buku, onPinjam, sudahDipinjam }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg bg-white flex flex-col">
      <span className="text-xs text-blue-600 font-semibold">{buku.kategori}</span>
      <h2 className="font-semibold text-lg mt-1">{buku.judul}</h2>
      <p className="text-gray-600 text-sm">{buku.penulis}</p>
      <p className="text-sm mt-2">Stok: {buku.stok}</p>

      <div className="mt-4 flex items-center justify-between">
        <Link to={`/buku/${buku.id}`} className="text-blue-600 hover:underline text-sm">
          Lihat Detail
        </Link>

        {/* Conditional Rendering: 3 kondisi tombol */}
        {buku.stok === 0 ? (
          <span className="text-red-500 text-sm font-semibold">Stok habis</span>
        ) : sudahDipinjam ? (
          <span className="text-green-600 text-sm font-semibold">Dipinjam ✓</span>
        ) : (
          <button
            onClick={() => onPinjam(buku)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            Pinjam
          </button>
        )}
      </div>
    </div>
  );
}