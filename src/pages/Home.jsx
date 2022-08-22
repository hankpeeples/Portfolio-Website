import MyInfo from "../components/Home/MyInfo";
import Experience from "../components/Home/Experience";
import Contact from "./Contact";
import Bio from "../components/Home/Bio";

const Home = () => {
  return (
    <div>
      <MyInfo />
      {/* <Bio /> */}
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
