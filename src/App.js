import { Routes, Route } from "react-router-dom";
import EditPage from "./components/pages/EditPage";
import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";

function App() {
  console.log("response");
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/edit" element={<EditPage />} />
        <Route exact path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
