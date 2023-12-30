import Banner from "./components/banner/Banner";
import News from "./components/news/News";
import About from "./components/about/About";
import Room from "./components/room/Room";
import Food from "./components/food/Food";
import Transportation from "./components/transportation/Transportation";

const Home = () => {
  return (
    <>
      <Banner />
      <News />
      <About />
      <Room />
      <Food />
      <Transportation />
    </>
  );
};

export default Home;
