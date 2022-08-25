import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="header" variant="dark">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;