import "./App.css";
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { AuthContext } from "./context/AuthContext";
import Logout from "./pages/Logout";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/loginpage"
              element={token ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route
              path="/registerpage"
              element={token ? <Navigate to="/" /> : <RegisterPage />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:pizza_id" element={<Pizza />} />
            <Route
              path="/profile"
              element={token ? <Profile /> : <Navigate to="/loginpage" />}
            />
            <Route path="/Pizza/:pizza_id" element={<Pizza />} />
            <Route path="/logout" element={token ? <Navigate to="/" /> : <Logout />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
