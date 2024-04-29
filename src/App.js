import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          gap: "0.5rem",
          listStyleType: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
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
