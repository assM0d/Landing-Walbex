import Header from "../header/Header";
import Footer from "../footer/Footer";
import BgCircles from "../bgCircles/bgCircles.jsx";
import "./App.css";
import Basic from "../basic/basic";

function App() {
  return (
    <div className="app">
      <Header />
      <Basic />
      <Footer />
      <BgCircles />
    </div>
  );
}

export default App;
