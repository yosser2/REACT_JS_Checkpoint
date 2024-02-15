import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">MOvies</Nav.Link>
            <Nav.Link href="#pricing">TV Shows</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;