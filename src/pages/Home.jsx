import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyInfo from "../components/MyInfo";
import Experience from "../components/Experience";
import Bio from "../components/Bio";

const Home = () => {
  return (
    <div>
      <NavBar />
      <MyInfo />
      <Bio />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
