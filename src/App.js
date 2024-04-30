import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
