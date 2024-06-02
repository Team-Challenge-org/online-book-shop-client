import Slider from "components/assets/Slider/Slider";
import CatalogList from "components/modules/CatalogList/CatalogList";
import { useModalCart } from "contexts/modalCartWindow/ModalCartContext";
import CategoriesList from "components/modules/CategoriesList/CategoriesList";
import { ModalCart } from "components/modules/ModalShoppingCart/ModalCart/ModalCart";

const HomePage = () => {
  const { showModal } = useModalCart();

  return (
    <main className="container">
      <Slider />
      <CategoriesList />
      <div className="main">
        <CatalogList />
      </div>

      {/* Modal Window For Shopping Cart */}
      {showModal && <ModalCart />}
    </main>
  );
};

export default HomePage;
