import { RecentlyViewedBooks } from 'components/modules/ProductPage/recentlyViewedBooks/RecentlyViewedBooks';
import { ProductInfo } from '../../components/modules/ProductPage/ProductInfo';
import TestSlider from 'TestSlider';

export default function ProductPage() {
  return (
    <main className="main">
      <div className="container">
        <ProductInfo />
        {/*<TestSlider />*/}
        <RecentlyViewedBooks />
      </div>
    </main>
  );
}
