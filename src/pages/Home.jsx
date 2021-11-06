import Annoncement from '../components/Annoncement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Annoncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
