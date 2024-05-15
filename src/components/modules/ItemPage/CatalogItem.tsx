import CartActiveSvg from 'components/elements/CartActiveSvg/CartActiveSvg';
import CartInactiveSvg from 'components/elements/CartInactiveSvg/CartInactiveSvg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/cart/selectors';
import { addItem, removeItem } from 'store/cart/slice';
import { CartItems } from 'store/cart/types';
import { useAppDispatch } from 'store/store';

const CatalogItem = ({ item }: any) => {
  const dispatch = useAppDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { items: cartItems } = useSelector(selectCart);

  const cartItemsHandler = (obj: CartItems) => {
    if (cartItems.find((object) => object.index === obj.index)) {
      dispatch(removeItem(obj.index));
      setIsAddedToCart(false);
    } else {
      dispatch(addItem(obj));
      setIsAddedToCart(true);
    }
  };

  return (
    <li className="test__li" key={item.index}>
      <img src={item.picture} alt={item.name} width="302px" height="368px" />
      <span>Автор: {item.author}</span>
      <span>Назва: {item.name}</span>
      <span>{item.price} грн.</span>
      <button onClick={() => cartItemsHandler(item)}>
        {isAddedToCart ? <CartInactiveSvg /> : <CartActiveSvg />}
      </button>
      <button>Add to favorite</button>
    </li>
  );
};

export default CatalogItem;
