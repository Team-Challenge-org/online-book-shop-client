import {
  removeItem,
  decreaseItemQantity,
  increaseItemQuantity,
  updateItemQuantity,
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
  onUpdateItemQuantity: (id: number, quantity: number) => void;
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
  onUpdateItemQuantity: () => {},
});

type TModalCartProviderProps = {
  children: React.ReactNode;
};

function ModalCartProvider({ children }: TModalCartProviderProps) {
  const dispatch = useDispatch();
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

  function hadnleIncreaseBookCount(bookId: number) {
    dispatch(increaseItemQuantity(bookId));
  }

  function handleDecreaseBookCount(bookId: number) {
    dispatch(decreaseItemQantity(bookId));
  }

  function handleRemoveBookFromCart(bookId: number) {
    dispatch(removeItem(bookId));
  }

  function handleUpdateItemQuantity(id: number, quantity: number) {
    dispatch(
      updateItemQuantity({
        itemId: id,
        newQuantity: quantity,
      })
    );
  }

  const contextValue: TModalCartContext = {
    showModal,
    cartItemsCount,
    totalCartPrice,
    onOpenCartModal: handleOpenModal,
    onCloseCartModal: handleCloseModal,
    onIncreaseBookCount: hadnleIncreaseBookCount,
    onDecreaseBookCount: handleDecreaseBookCount,
    onRemoveBookFromCart: handleRemoveBookFromCart,
    onUpdateItemQuantity: handleUpdateItemQuantity,
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
