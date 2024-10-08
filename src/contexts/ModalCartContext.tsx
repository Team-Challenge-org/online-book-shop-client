import type { TCartItem, TUpdateParams } from "store/cart/types";

import {
  removeItem,
  addItemToCart,
  updateItemQuantity,
  addOrRemoveCartItem,
} from "store/cart/cartSlice";

import {
  selectAuthUserCart,
  selectNotAuthUserCart,
} from "store/cart/selectors";

import {
  getCartItems,
  deleteCartItem,
  addItemToAuthCart,
  updateCartItemQuantity,
} from "store/cart/asyncActions";

import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import { selectIsAuth } from "store/auth/selectors";
import React, { createContext, useContext, useState } from "react";

export type TModalCartContext = {
  showModal: boolean;
  cartItemsCount: number;
  totalCartPrice: number;
  onOpenCartModal: () => void;
  onCloseCartModal: () => void;
  onAddBookToCart: (book: TCartItem) => void;
  onRemoveBookFromCart: (bookId: number) => void;
  onAddOrRemoveCartItem: (book: TCartItem) => void;
  onUpdateItemQuantity: (id: number, quantity: number) => void;
};

const ModalCartContext = createContext<TModalCartContext>({
  showModal: false,
  totalCartPrice: 0,
  cartItemsCount: 0,
  onAddBookToCart: () => {},
  onOpenCartModal: () => {},
  onCloseCartModal: () => {},
  onRemoveBookFromCart: () => {},
  onUpdateItemQuantity: () => {},
  onAddOrRemoveCartItem: () => {},
});

type TModalCartProviderProps = {
  children: React.ReactNode;
};

function ModalCartProvider({ children }: TModalCartProviderProps) {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const { cartItems: authUserCart, totalPrice } =
    useSelector(selectAuthUserCart);
  const { cartItems: notAuthUserCart } = useSelector(selectNotAuthUserCart);

  const isAuth = useSelector(selectIsAuth);

  const totalCartPrice = isAuth
    ? totalPrice
    : notAuthUserCart?.reduce(
        (totalPrice, book) => totalPrice + book?.price * book?.quantity,
        0
      );

  const cartItemsCount = isAuth
    ? authUserCart?.length || 0
    : notAuthUserCart?.length;

  function handleOpenModal() {
    // make api call to get auth cart
    if (isAuth) dispatch(getCartItems());

    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleAddBookToCart(book: TCartItem) {
    if (isAuth) {
      dispatch(addItemToAuthCart(book.id));
    } else {
      dispatch(addItemToCart(book));
    }
    handleOpenModal();
  }

  function handleAddOrRemoveCartItem(book: TCartItem) {
    if (isAuth) {
      const isBookInsideCart = !!authUserCart.find(
        (item) => item.id === book.id
      );

      if (isBookInsideCart) {
        dispatch(deleteCartItem(book.id));
        toast.error(`Вы удалили книгу ${book.title} из корзины!`);
      } else {
        dispatch(addItemToAuthCart(book.id));
        toast.success(`Вы успешно добавили книгу ${book.title} в коризину!`);
      }
    } else {
      dispatch(addOrRemoveCartItem(book));
    }
  }

  function handleRemoveBookFromCart(bookId: number) {
    if (isAuth) {
      dispatch(deleteCartItem(bookId));
    } else {
      dispatch(removeItem(bookId));
    }
  }

  function handleUpdateItemQuantity(id: number, quantity: number) {
    if (isAuth) {
      const params: TUpdateParams = {
        bookId: id,
        quantity: quantity,
      };

      dispatch(updateCartItemQuantity(params));
    } else {
      dispatch(
        updateItemQuantity({
          itemId: id,
          newQuantity: quantity,
        })
      );
    }
  }

  const contextValue: TModalCartContext = {
    showModal,
    cartItemsCount,
    totalCartPrice,
    onOpenCartModal: handleOpenModal,
    onCloseCartModal: handleCloseModal,
    onAddBookToCart: handleAddBookToCart,
    onRemoveBookFromCart: handleRemoveBookFromCart,
    onUpdateItemQuantity: handleUpdateItemQuantity,
    onAddOrRemoveCartItem: handleAddOrRemoveCartItem,
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
