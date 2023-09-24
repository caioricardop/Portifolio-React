import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "../src/shard/Header/Menu";
import Footer from "../src/shard/Footer/Footer";
import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
