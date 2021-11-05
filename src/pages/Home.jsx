import Annoncement from '../components/Annoncement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Annoncement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
