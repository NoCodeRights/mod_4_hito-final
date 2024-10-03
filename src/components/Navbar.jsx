import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatNumber } from "../scripts";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function NavbarApp() {
  const { total } = useContext(CartContext);
  const { token } = useContext(AuthContext);

  const setActiveClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand as={Link} to="/">
            Pizzería Mamma Mia!
          </Navbar.Brand>
          <Button className="btn-sm" variant="outline-light">
            <NavLink to="/" className={setActiveClass}>
              🍕Home
            </NavLink>
          </Button>

          {token ? (
            <>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/Profile" className={setActiveClass}>
                  🔓Profile
                </NavLink>
              </Button>

              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/Logout" className={setActiveClass}>
                  🔒Logout
                </NavLink>
              </Button>
            </>
          ) : (
            <>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/LoginPage" className={setActiveClass}>
                  🔐Login
                </NavLink>
              </Button>

              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/RegisterPage" className={setActiveClass}>
                  🔐Register
                </NavLink>
              </Button>
            </>
          )}
        </Nav>


        {token && (
          <Button className="btn-sm" variant="outline-info" href="#total">
            <NavLink to="/Cart" className={setActiveClass}>🛒Total: {formatNumber(total)}</NavLink>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
