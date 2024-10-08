import { useEffect } from "react";
import { useAppDispatch } from "store/store";
import Slider from "components/assets/Slider/Slider";
import { getCartItems } from "store/cart/asyncActions";
import CatalogList from "components/modules/homePage/CatalogList/CatalogList";
import CategoriesList from "components/modules/homePage/CategoriesList/CategoriesList";
import { useSelector } from "react-redux";
import { selectIsAuth } from "store/auth/selectors";
import { getFavorites } from "store/favorite/asyncActions";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(getCartItems());
      dispatch(getFavorites());
    }
  }, [dispatch, isAuth]);

  return (
    <main className="main">
      <Slider />
      <CategoriesList />

      <div className="container">
        <CatalogList />
      </div>
    </main>
  );
};

export default HomePage;
