import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Footer } from "./components/Footer";
import MyNavBar from "./components/Navbar";
import { Home } from "./components/Home";
import RestaurantMenu from "./components/Menu";

import { useMemo } from "react";
import { productMenu } from "./components/Products/data";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const memoizedMenuItems = useMemo(() => productMenu, []);

  return (
    <Router>
      <MyNavBar />
      <GlobalStyle />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/menu" element={            
          <RestaurantMenu menuItems={memoizedMenuItems} title="" />}
          />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

