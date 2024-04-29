import { Route, Routes, Link } from "react-router-dom";

import Header from "./Components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Component</div>} />
        <Route path="/about" element={<div>About Component</div>} />
        <Route path="/pricing" element={<div>Pricing Component</div>} />
        <Route path="/career" element={<div>Career Component</div>} />
        <Route path="/contact" element={<div>Contact us Component</div>} />
        <Route path="/cart" element={<div>Cart Component</div>} />
      </Routes>
    </div>
  );
}

export default App;
