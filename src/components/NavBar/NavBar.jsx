import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar id="nav-bar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            id="logo-nav"
            src="https://i.imgur.com/G4eja1w.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#story-buffer">Story</Nav.Link>
            <NavDropdown title="Pictures" id="basic-nav-dropdown">
              <NavDropdown.Item href="#bathroom-buffer">
                Bathroom
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bedroom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dining</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Game</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Garage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Kitchen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Living</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.9">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
