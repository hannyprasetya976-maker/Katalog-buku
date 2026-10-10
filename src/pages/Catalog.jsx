import { useState } from "react";
import BookCard from "../components/BookCard";
import { useBorrow } from "../context/BorrowContext";
import { useBooks } from "../context/BookContext";

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const { borrowed, pinjam } = useBorrow();
  const { books } = useBooks();

  const daftarKategori = ["Semua", ...new Set(books.map((b) => b.kategori))];

  const hasil = books.filter((b) => {
    const cocokJudul = b.judul.toLowerCase().includes(search.toLowerCase());
    const cocokKategori = kategori === "Semua" || b.kategori === kategori;
    return cocokJudul && cocokKategori;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Katalog Buku</h1>

      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <input
          type="text"
          placeholder="Cari judul buku..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg bg-white"
        />
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          {daftarKategori.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>

      {/* Conditional Rendering: hasil kosong vs ada */}
      {hasil.length === 0 ? (
        <p className="text-gray-500">Buku tidak ditemukan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hasil.map((b) => (
            <BookCard
              key={b.id}
              buku={b}
              onPinjam={pinjam}
              sudahDipinjam={borrowed.some((x) => x.id === b.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}