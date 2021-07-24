import React from "react";
import { Navbar, nav, Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useAuth, AuthProvider } from "../../contexts/AuthContext";
import Routes from "./Routes";

export default function NavbarComponent() {


    return (
    <Router>
      <AuthProvider>
        <Navbar bg="light" expand="sm">
          <Navbar.Brand as={Link} to="/">
            ZASolution Drive
          </Navbar.Brand>
          {/* <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav> */}
        </Navbar>

        <Routes />
      </AuthProvider>
    </Router>
  );
}
