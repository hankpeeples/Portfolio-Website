import NavBar from "../components/NavBar";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import MyInfo from "../components/MyInfo";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <NavBar />
      <MyInfo />
      <Experience />
      <Socials />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
