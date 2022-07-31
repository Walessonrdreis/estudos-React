import './App.css';
import { DataProvider } from "./Context/DataContext";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import {CartProvider} from "./Context/CartContext";
import {WishlistProvider} from "./Context/WishlistContext";
import {FeedbackProvider} from "./Context/FeedbackContext";
import FilterProvider from "./Context/FilterContext";
import Feedback from "./components/Feedback";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductsDisplay from "./Pages/ProductsDisplay";
import WishlistPage from "./Pages/WishlistPage";
import CartPage from "./Pages/CartPage";



function App() {
  return (
    <div className="App">
    <DataProvider>
    <Navbar />
    <Banner />
    <CartProvider >
    <WishlistProvider>
    <FeedbackProvider>
    <FilterProvider>
    <Feedback />
    <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route
                    path="/products/:category"
                    element={<ProductsDisplay />}
                  />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="cart" element={<CartPage />} />
                </Routes>
    

    </FilterProvider>

    </FeedbackProvider>


    </WishlistProvider>
    


    </CartProvider>


    
    

    </DataProvider>

     
    </div>
  );
}

export default App;
