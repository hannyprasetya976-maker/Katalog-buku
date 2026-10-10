import { useState } from "react";
import { useBooks } from "../../context/BookContext";

const formAwal = { judul: "", penulis: "", kategori: "", stok: 1, deskripsi: "" };

export default function ManageBooks() {
  const { books, tambahBuku, hapusBuku, ubahStok } = useBooks();
  const [form, setForm] = useState(formAwal);
  const [error, setError] = useState("");
  const [sukses, setSukses] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSukses("");

    if (!form.judul.trim() || !form.penulis.trim() || !form.kategori.trim()) {
      setError("Judul, penulis, dan kategori wajib diisi.");
      return;
    }
    if (Number(form.stok) < 0) {
      setError("Stok tidak boleh negatif.");
      return;
    }

    tambahBuku({ ...form, stok: Number(form.stok) });
    setForm(formAwal);
    setError("");
    setSukses(`Buku "${form.judul}" berhasil ditambahkan.`);
  };

  const handleHapus = (b) => {
    if (window.confirm(`Hapus buku "${b.judul}"?`)) {
      hapusBuku(b.id);
      setSukses(`Buku "${b.judul}" berhasil dihapus.`);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kelola Buku</h1>

      {/* Form tambah buku */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
        <h2 className="font-semibold">Tambah Buku Baru</h2>

        {/* Conditional Rendering: pesan error dan sukses */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {sukses && <p className="text-green-600 text-sm">{sukses}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="judul" value={form.judul} onChange={handleChange}
            placeholder="Judul" className="px-3 py-2 border rounded" />
          <input name="penulis" value={form.penulis} onChange={handleChange}
            placeholder="Penulis" className="px-3 py-2 border rounded" />
          <input name="kategori" value={form.kategori} onChange={handleChange}
            placeholder="Kategori" className="px-3 py-2 border rounded" />
          <input name="stok" type="number" min="0" value={form.stok} onChange={handleChange}
            placeholder="Stok" className="px-3 py-2 border rounded" />
        </div>
        <textarea name="deskripsi" value={form.deskripsi} onChange={handleChange}
          placeholder="Deskripsi singkat" rows="2"
          className="w-full px-3 py-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Tambah Buku
        </button>
      </form>

      {/* Tabel daftar buku */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3">Judul</th>
              <th className="p-3">Kategori</th>
              <th className="p-3">Stok</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  Belum ada buku.
                </td>
              </tr>
            ) : (
              books.map((b) => (
                <tr key={b.id} className="border-b">
                  <td className="p-3">
                    <div className="font-semibold">{b.judul}</div>
                    <div className="text-gray-500">{b.penulis}</div>
                  </td>
                  <td className="p-3">{b.kategori}</td>
                  <td className="p-3">
                    <input
                      type="number"
                      min="0"
                      value={b.stok}
                      onChange={(e) => ubahStok(b.id, Math.max(0, Number(e.target.value)))}
                      className="w-20 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="p-3">
                    <button onClick={() => handleHapus(b)} className="text-red-500 hover:underline">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}