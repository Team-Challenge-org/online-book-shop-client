import SliderPage from 'components/assets/Slider/Slider';
import Footer from 'components/modules/Footer/Footer';
import Header from 'components/modules/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <SliderPage />
      <div className="main"></div>
      <Footer />
    </div>
  );
}

export default App;
