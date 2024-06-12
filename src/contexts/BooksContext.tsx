import type { TBook } from "store/books/types";

import { useDispatch } from "react-redux";
import { NAV_URL } from "constants/global";
import { useNavigate } from "react-router-dom";
import { setSimilarBooks } from "store/books/booksSlice";
import React, { createContext, useContext } from "react";
import { addRecentlyViewedBook } from "store/recentlyViewedBooks/recentlyViewedBooksSlice";

export type TBooksContext = {
  updateBookViewAndData: (book: TBook) => void;
};

const BooksContext = createContext<TBooksContext>({
  updateBookViewAndData: () => {},
});

type TModalCartProviderProps = {
  children: React.ReactNode;
};

function BooksLogicProvider({ children }: TModalCartProviderProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function updateBookViewAndData(book: TBook) {
    dispatch(setSimilarBooks(book));
    dispatch(addRecentlyViewedBook(book));
    navigate(NAV_URL.PRODUCT_PAGE + book.id);
  }

  const contextValue: TBooksContext = {
    updateBookViewAndData,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
}

// Custom hook
function useBooksLogic() {
  const context = useContext(BooksContext);

  if (context === undefined)
    throw new Error("BooksContext  was used outside of BooksLogicProvider");

  return context;
}

export { BooksLogicProvider, useBooksLogic };
