import React from "react";
import { Navbar, nav, Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {  AuthProvider } from "../../contexts/AuthContext";
import Routes from "./Routes";

export default function NavbarComponent() {
  // const { currentUser } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <Navbar bg="light" expand="sm">
          <Navbar.Brand as={Link} to="/">
            ZASolution Drive
          </Navbar.Brand>

          <Nav>
            <Nav.Link as={Link} to="/myads">
              MyAds
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/sale">
              Sale
            </Nav.Link>
          </Nav>
          <Nav>  
            <Nav.Link as={Link} to="/user">
              Profile (Logout)
            </Nav.Link>
          </Nav>
          <Nav>  
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar>
    
        <Routes />
      </AuthProvider>
    </Router>
  );
}
