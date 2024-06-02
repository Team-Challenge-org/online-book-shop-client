import {
  decreaseItemQantity,
  increaseItemQuantity,
  removeItem,
} from "store/cart/cartSlice";
import { selectCart } from "store/cart/selectors";
import { useDispatch, useSelector } from "react-redux";
import React, { createContext, useContext, useState } from "react";

export type TModalCartContext = {
  showModal: boolean;
  cartItemsCount: number;
  totalCartPrice: number;
  onOpenCartModal: () => void;
  onCloseCartModal: () => void;
  onIncreaseBookCount: (bookId: number) => void;
  onDecreaseBookCount: (bookId: number) => void;
  onRemoveBookFromCart: (bookId: number) => void;
};

const ModalCartContext = createContext<TModalCartContext>({
  showModal: false,
  totalCartPrice: 0,
  cartItemsCount: 0,
  onOpenCartModal: () => {},
  onCloseCartModal: () => {},
  onIncreaseBookCount: () => {},
  onDecreaseBookCount: () => {},
  onRemoveBookFromCart: () => {},
});

type TModalCartProviderProps = {
  children: React.ReactNode;
};

function ModalCartProvider({ children }: TModalCartProviderProps) {
  const [showModal, setShowModal] = useState(false);
  const { items: shoppingCart } = useSelector(selectCart);

  const totalCartPrice = shoppingCart?.reduce(
    (totalPrice, book) => totalPrice + book?.price * book?.quantity,
    0
  );

  const cartItemsCount = shoppingCart?.length;

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const dispatch = useDispatch();

  function hadnleIncreaseBookCount(bookId: number) {
    dispatch(increaseItemQuantity(bookId));
  }

  function handleDecreaseBookCount(bookId: number) {
    dispatch(decreaseItemQantity(bookId));
  }

  function handleRemoveBookFromCart(bookId: number) {
    dispatch(removeItem(bookId));
  }

  const contextValue: TModalCartContext = {
    showModal,
    totalCartPrice,
    cartItemsCount,
    onCloseCartModal: handleCloseModal,
    onOpenCartModal: handleOpenModal,
    onIncreaseBookCount: hadnleIncreaseBookCount,
    onDecreaseBookCount: handleDecreaseBookCount,
    onRemoveBookFromCart: handleRemoveBookFromCart,
  };

  return (
    <ModalCartContext.Provider value={contextValue}>
      {children}
    </ModalCartContext.Provider>
  );
}

// Custom hook
function useModalCart() {
  const context = useContext(ModalCartContext);
  if (context === undefined)
    throw new Error("ModalCartContext  was used outside of ModalCartProvider");

  return context;
}

export { ModalCartProvider, useModalCart };
