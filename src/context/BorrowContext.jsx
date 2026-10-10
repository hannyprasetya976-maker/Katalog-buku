import { createContext, useContext, useState } from "react";

const BorrowContext = createContext();

export function BorrowProvider({ children }) {
  const [borrowed, setBorrowed] = useState([]);

  const pinjam = (buku) => {
    setBorrowed((prev) =>
      prev.some((b) => b.id === buku.id) ? prev : [...prev, buku]
    );
  };

  const kembalikan = (id) => {
    setBorrowed((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <BorrowContext.Provider value={{ borrowed, pinjam, kembalikan }}>
      {children}
    </BorrowContext.Provider>
  );
}

export const useBorrow = () => useContext(BorrowContext);