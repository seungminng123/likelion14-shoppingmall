import {BrowserRouter, Routes, Route} from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import Main from "../src/pages/Main/Main.jsx"
import ProductDetail from "../src/pages/ProductDetail/ProductDetail.jsx"
import ProductAdd from "../src/pages/ProductDetail/ProductAdd.jsx";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/item/:id" element={<ProductDetail/>} />
          <Route path="/add" element={<ProductAdd/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

