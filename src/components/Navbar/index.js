import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavBar() {
  var scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" onClick={scrollToTop}>PIZZA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#favorite">Favoritos</Nav.Link>
            <Nav.Link href="/#sweets">Postres</Nav.Link>
            <NavDropdown title="Info" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/#time">Horarios</NavDropdown.Item>
              <NavDropdown.Item href="/#about">
              About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/#location">
              Localización
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu">
              Menu
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;