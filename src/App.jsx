import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
function App() {
  return (
  <div className="bg-[#f3f4b91] h-auto w-full overflow-hidden">
  <Navbar />
  <Home />
  <About />
  <Experience />
  <Projects />
  <Footer />
</div>
  );
}

export default App;
