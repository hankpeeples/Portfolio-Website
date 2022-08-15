import Footer from "../components/Footer";
import MyInfo from "../components/MyInfo";
import Experience from "../components/Experience";
import Contact from "./Contact";
import Bio from "../components/Bio";

const Home = () => {
  return (
    <div>
      <MyInfo />
      <Bio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
