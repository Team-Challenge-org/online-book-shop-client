import { ProductInfo } from "../../components/modules/ProductPage/ProductInfo";
import { RecentlyViewedBooks } from "components/modules/ProductPage/recentlyViewedBooks/RecentlyViewedBooks";

export default function ProductPage() {
  return (
    <main className="main">
      <div className="container">
        <ProductInfo />
        {/* <RecentlyViewedBooks /> */}
      </div>
    </main>
  );
}
