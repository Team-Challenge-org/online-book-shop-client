import CartActiveSvg from 'components/elements/CartActiveSvg/CartActiveSvg';
import CartInactiveSvg from 'components/elements/CartInactiveSvg/CartInactiveSvg';
import FavoriteActiveSvg from 'components/elements/FavoriteActiveSvg/FavoriteActiveSvg';
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
    if (cartItems.find((object) => object.id === obj.id)) {
      dispatch(removeItem(obj.id));
      setIsAddedToCart(false);
    } else {
      dispatch(addItem(obj));
      setIsAddedToCart(true);
    }
  };

  return (
    <li className="test__li" key={item.id}>
      <img src={item.picture} alt={item.title} width="302px" height="368px" />
      <span>Автор: {item.author}</span>
      <span>Назва: {item.title}</span>
      <span>{item.price} грн.</span>
      <button onClick={() => cartItemsHandler(item)}>
        {isAddedToCart ? <CartInactiveSvg /> : <CartActiveSvg />}
      </button>
      <button>
        <FavoriteActiveSvg />
      </button>
    </li>
  );
};

export default CatalogItem;
