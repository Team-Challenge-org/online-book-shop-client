import CartActiveSvg from 'components/elements/CartActiveSvg/CartActiveSvg';
import CartInactiveSvg from 'components/elements/CartInactiveSvg/CartInactiveSvg';
import FavoriteActiveSvg from 'components/elements/FavoriteActiveSvg/FavoriteActiveSvg';
import FavoriteInactiveSvg from 'components/elements/FavoriteInactiveSvg/FavoriteInactiveSvg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/cart/selectors';
import { addOrRemoveCartItem } from 'store/cart/slice';
import { CartItem } from 'store/cart/types';
import { selectFavorite } from 'store/favorite/selectors';
import { addOrRemoveFavoriteItem } from 'store/favorite/slice';
import { FavoriteItems } from 'store/favorite/types';
import { useAppDispatch } from 'store/store';
import { CatalogItemType } from 'types/commont';
import ButtonHoverCart from './ButtonHoverCart';
import CartHoverSvg from 'components/elements/CartHoverSvg/CartHoverSvg';
import ButtonHoverFavorite from './ButtonHoverFavorite';
import FavoriteHoverSvg from 'components/elements/FavoriteHoverSvg/FavoriteHoverSvg';

const CatalogItem = ({ item }: CatalogItemType) => {
  const dispatch = useAppDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const { items: CartItem } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorite);

  useEffect(() => {
    if (CartItem.length > 0) {
      let checkCart = CartItem.find((obj) => obj.id === item.id);
      if (checkCart) {
        setIsAddedToCart(true);
      }
    }

    if (favoriteItems.length > 0) {
      let checkFavorite = favoriteItems.find((obj) => obj.id === item.id);
      if (checkFavorite) {
        setIsAddedToFavorite(true);
      }
    }
  }, [CartItem, favoriteItems, item, dispatch]);

  const CartItemHandler = (obj: CartItem) => {
    dispatch(addOrRemoveCartItem(obj));
    setIsAddedToCart(!isAddedToCart);
  };

  const favoriteItemsHandler = (obj: FavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  return (
    <li className="test__li" key={item.id}>
      <div className="test__wrapper">
        <img src={item.titleImage!} alt={item.title} width="302px" height="368px" />
        <div className="test__wrapper__hover">
          <button onClick={() => CartItemHandler(item)}>
            <ButtonHoverCart hover={<CartHoverSvg />} isAdded={isAddedToCart} />
          </button>
          <button onClick={() => favoriteItemsHandler(item)}>
            <ButtonHoverFavorite hover={<FavoriteHoverSvg />} isAdded={isAddedToFavorite} />
          </button>
        </div>
      </div>

      <span>Автор: {item.author}</span>
      <span>Назва: {item.title}</span>
      <span>{item.price} грн.</span>
    </li>
  );
};

export default CatalogItem;
