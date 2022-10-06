import MyInfo from "../components/Home/MyInfo";
import Experience from "../components/Home/Experience";
import Contact from "./Contact";
// import Bio from "../components/Home/Bio";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
