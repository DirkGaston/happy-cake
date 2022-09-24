import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar title="Happy Cake" />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
