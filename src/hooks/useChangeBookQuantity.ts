import type { TCartItem } from "store/cart/types";

import {
  decreaseItemQantity,
  increaseItemQuantity,
} from "store/cart/cartSlice";
import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { selectIsAuth } from "store/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

export function useChangeBookQuantity(book: TCartItem) {
  const [itemQuantity, setItemQuantity] = useState(book.quantity);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const totalBookPrice = book?.price * book?.quantity;

  const debouncedItemQuantity = useDebounce(itemQuantity, 300);

  function handleChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (Number(value) === 0) return setItemQuantity(1);
    setItemQuantity(Number(e.target.value));
  }

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    input.value = input.value.replace(/^0+(?=\d)/, "");
  }

  function handleIncreaseItemQuantity() {
    if (isAuth) {
      setItemQuantity((prev) => prev + 1);
    } else {
      dispatch(increaseItemQuantity(book.id));
    }
  }

  function handleDecreaseItemQuantity() {
    if (isAuth) {
      if (itemQuantity > 1) {
        setItemQuantity((prev) => prev - 1);
      }
    } else {
      dispatch(decreaseItemQantity(book.id));
    }
  }

  return {
    handleInput,
    itemQuantity,
    totalBookPrice,
    setItemQuantity,
    handleChangeQuantity,
    debouncedItemQuantity,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
  };
}
