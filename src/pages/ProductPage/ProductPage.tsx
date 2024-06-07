import { ProductInfo } from "../../components/modules/ProductPage/ProductInfo";
import { SimilarBooks } from "components/modules/ProductPage/similarBooks/SimilarBooks";
import { RecentlyViewedBooks } from "components/modules/ProductPage/recentlyViewedBooks/RecentlyViewedBooks";

export default function ProductPage() {
  return (
    <main className="main">
      <div className="container">
        <ProductInfo />
        <span className="line"></span>
        <RecentlyViewedBooks />
        <SimilarBooks />
      </div>
    </main>
  );
}
