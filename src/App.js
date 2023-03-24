import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import "./App.css";
import { productMenu } from "./components/Products/data";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./components/Navbar";
import { Home } from "./components/Home";
import RestaurantMenu from "./components/Menu";

function App() {
  return (
    <Router>
    <MyNavBar/>
    <GlobalStyle/>
    <Home />
    <RestaurantMenu menuItems={productMenu} title=""/> 
    <Footer/>
  </Router>

  );
}

export default App;
