import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListning from "./container/ProductListning";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductListning />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
