import { ProductInfo } from "../../components/modules/ProductPage/ProductInfo";
import { SimilarBooksList } from "components/modules/ProductPage/similarBooks/similarBooksList/SimilarBooksList";
import { RecentlyViewedBooksList } from "components/modules/ProductPage/recentlyViewedBooks/recentlyViewedBooksList/RecentlyViewedBooks";

export default function ProductPage() {
  return (
    <main className="main">
      <div className="container">
        <ProductInfo />
        <span className="line"></span>
        <RecentlyViewedBooksList />
        <SimilarBooksList />
      </div>
    </main>
  );
}
