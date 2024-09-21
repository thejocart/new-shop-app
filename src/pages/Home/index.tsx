import HomeSlider from "../../components/HomeSlider";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className={" bg-gray-200 dark:bg-gray-900"}>
      <Navbar />
      <HomeSlider />
    </div>
  );
};

export default Home;
