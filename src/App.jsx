import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar title="Happy Cake" />
        <Routes>
          <Route exact path="/happy-cake" element={<Home />}></Route>
          <Route path="/happy-cake/contacto" element={<Contacto />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
