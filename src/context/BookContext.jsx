import { createContext, useContext, useState } from "react";
import { books as dataAwal } from "../data/books";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState(dataAwal);

  const tambahBuku = (buku) => {
    setBooks((prev) => {
      const idBaru = prev.length ? Math.max(...prev.map((b) => b.id)) + 1 : 1;
      return [...prev, { ...buku, id: idBaru }];
    });
  };

  const hapusBuku = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const ubahStok = (id, stok) => {
    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, stok } : b)));
  };

  return (
    <BookContext.Provider value={{ books, tambahBuku, hapusBuku, ubahStok }}>
      {children}
    </BookContext.Provider>
  );
}

export const useBooks = () => useContext(BookContext);