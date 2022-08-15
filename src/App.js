import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="font-proxima text-white bg-[#2f2f2f] h-full w-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
