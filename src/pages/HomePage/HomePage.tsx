import { useEffect } from "react";
import { useAppDispatch } from "store/store";
import Slider from "components/assets/Slider/Slider";
import { getCartItems } from "store/cart/asyncActions";
import CatalogList from "components/modules/CatalogList/CatalogList";
import CategoriesList from "components/modules/CategoriesList/CategoriesList";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

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
